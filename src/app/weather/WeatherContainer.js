import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import WeatherComponent from './WeatherComponent'
import * as weatherActions from '../../actions/WeatherActions';

function mapStateToProps(state) {
    return {
        state: state.weatherReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(weatherActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);