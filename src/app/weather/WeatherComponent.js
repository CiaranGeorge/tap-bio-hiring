import React from "react";
import withMaterialUi from '../MaterialApp';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { DatePicker } from 'material-ui-pickers';
import Typography from '@material-ui/core/Typography';

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
            <div>
                <form className="inputForm" noValidate autoComplete="off">
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
                        className="datepicker"
                        label="Select Date"
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
                <div className="card-container">
                    {this.props.state.weather.sort((a,b) => {
                        if(a.daily && b.daily)
                            return a.daily.data[0].time < b.daily.data[0].time;
                        })
                        .map((weather, i) => {
                        // Return the element. Also pass key
                        if(weather.daily && weather.daily.data.length > 0) {
                            return <Card className="card">
                                <CardContent>
                                    <Typography color="textSecondary">
                                        {new Date(weather.daily.data[0].time * 1000).getFullYear()}
                                    </Typography>
                                    <Typography variant="headline" component="h2">
                                        {weather.daily.data[0].summary}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        High: {weather.daily.data[0].temperatureHigh}F
                                        Low: {weather.daily.data[0].temperatureLow}F
                                    </Typography>
                                    <Typography component="p">
                                        {weather.timezone}<br />

                                    </Typography>
                                </CardContent>
                            </Card>
                        }})}
                </div>
            </div>
        );
    }
}

export default withMaterialUi(WeatherComponent);