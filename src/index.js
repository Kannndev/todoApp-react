import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faCircle, faTimesCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from "./store/reducer";

// Initializing 3rd party libs
const store = createStore(reducer);
library.add(faCircle, faCheckCircle, faTimesCircle, faEdit, faTrashAlt);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route
                path="/:status"
                exact
                strict
                component={App}
            ></Route>
            <Route path='*' exact={true} render={() => <Redirect to="/all" />} />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
