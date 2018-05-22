import React from "react";

import {connect} from "react-redux";
import {Route} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import WeatherContainer from "../weather/WeatherContainer";

const Routes = () => (
    <div className="site">
        <Header/>
        <Route exact path="/" component={WeatherContainer}/>
        <Footer/>
    </div>
);

export default connect(null, null, null, {pure: false})(Routes);