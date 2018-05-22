import React from "react";
import withMaterialUi from '../MaterialApp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DatePicker } from 'material-ui-pickers';

class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.actions = props.actions;
        this.updateLatitude = this.updateLatitude.bind(this);
        this.updateLongitude = this.updateLongitude.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.fetchWeather = this.fetchWeather.bind(this);
    }

    updateLongitude = (longitude) => {
        this.actions.updateLongitude(longitude.target.value);
    }

    updateLatitude = (latitude) => {
        this.actions.updateLatitude(latitude.target.value);
    }

    updateDate = (date) => {
        this.actions.updateDate(date);
    }

    fetchWeather = () => {
        this.actions.requestWeather();
    }

    render() {
        return (
            <form noValidate autoComplete="off">
                <TextField
                    margin="normal"
                    label="Longtitude"
                    onBlur={this.updateLongitude}
                /><br />
                <TextField
                    margin="normal"
                    label="Latitude"
                    onBlur={this.updateLatitude}
                /><br />
                <DatePicker
                    label="Basic example"
                    value={this.props.state.date}
                    onChange={this.updateDate}
                    animateYearScrolling={false}
                    maxDateMessage="Date must be less than today"
                /><br />
                <Button
                    variant="raised"
                    color="secondary"
                    onClick={this.fetchWeather}>
                    Get Weather
                </Button>
            </form>
        );
    }
}

export default withMaterialUi(WeatherComponent);