import React from "react";
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'
import weatherify from './common/Reducers';
import Routes from "./common/Routes";
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
    weatherify,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
    </Provider>
);

export default App;
