import * as types from './ActionTypes';

export function updateDate(date) {
    return { type: types.UPDATE_DATE, date};
}

export function updateLongitude(longitude) {
    return { type: types.UPDATE_LONGITUDE, longitude};
}

export function updateLatitude(latitude) {
    return { type: types.UPDATE_LATITUDE, latitude};
}

export function fetchWeather() {
    return { type: types.FETCH_WEATHER};
}

export function fetchWeatherSuccess(weather) {
    return { type: types.FETCH_WEATHER_SUCCESS, weather};
}

export function fetchWeatherFail(error) {
    return { type: types.FETCH_WEATHER_FAIL, error};
}

const key =  "9babc235ef4b106678fa36e9695fe4bf";

const corsProxy = "https://cors-anywhere.herokuapp.com/";

const years = 5;

let url = corsProxy + "https://api.darksky.net/forecast/$key/$lat,$long,$date?exclude=currently,minutely,hourly,alerts"

export function requestWeather() {
    return (dispatch, getState) => {
        let state = getState().weatherReducer;
        let weatherData = [];
       let newUrl = url
            .replace("$key",key)
           .replace("$long",state.location.longitude)
           .replace("$lat", state.location.latitude);
       const results = getDates(state.date).map(async (date) => {
           dispatch(fetchWeather());
           console.log(date);
           return fetch(newUrl.replace("$date",getUnixTime(date)), {
               method: 'GET',
               mode: 'cors',
               headers: {
                   'X-Requested-With': '*'
               }
           }).then(response => response.json())
               .then((weather) => weatherData.push(weather))
       });

        Promise.all(results).then(() => {
            dispatch(fetchWeatherSuccess(weatherData));
        });
    }
}

function getDates(date) {
    return Array(years)
        .fill()
        .map((element, index) => {
            date = new Date(date);
            return new Date(date.getFullYear()
                - index, date.getMonth(), date.getDate())});
}

function getUnixTime(date) {
    return Math.round(new Date(date).getTime()/1000);
}
