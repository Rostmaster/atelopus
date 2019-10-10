import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import store from '../../atelopus/src/Redux/State'
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let treeRerender = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,

        document.getElementById('root'));
};

treeRerender(store.getState());
store.subscribe(treeRerender);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
