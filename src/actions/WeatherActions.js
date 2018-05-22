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

let url = "https://api.darksky.net/forecast/$key/$long,$lat,$date?exclude=currently,minutely,hourly,alerts"

export function requestWeather() {
    return (dispatch, getState) => {
        let state = getState().weatherReducer;
       url = url
            .replace("$key",key)
            .replace("$long",state.location.longitude)
            .replace("$lat",state.location.latitude)
            .replace("$date",getUnixTime(state.date));
        dispatch(fetchWeather());
        fetch(url)
            .then(response => {
                return response.json()
            }
            )
            .then(weather =>
                dispatch(fetchWeatherSuccess(weather))
            ).catch(error => {
                console.error(error);
                dispatch(fetchWeatherFail(error))
            })
    }
}

function getUnixTime(date) {
    return Math.round(new Date(date).getTime()/1000);
}
