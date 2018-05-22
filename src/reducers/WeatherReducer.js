import * as types from '../actions/ActionTypes';
import initialState from './state';

export default function locationReducer(state = initialState, action) {
    switch(action.type) {
        case types.UPDATE_DATE:
            return Object.assign({}, state, {date: action.date});
        case types.UPDATE_LONGITUDE:
            return Object.assign({}, state, {location: {longitude: action.longitude, latitude: state.location.latitude}});
        case types.UPDATE_LATITUDE:
            return Object.assign({}, state, {location: {longitude: state.location.longitude, latitude: action.latitude}});
        case types.FETCH_WEATHER:
            return Object.assign({}, state, {isLoading: true});
        default:
            return state;
    }
}
