import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import weatherReducer from '../../reducers/WeatherReducer';

const weatherifyApp = combineReducers({
    routerReducer,
    weatherReducer
});

export default weatherifyApp;
