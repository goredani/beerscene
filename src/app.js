import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetBeers} from './actions/beers';
import {setTextFilter} from './actions/filters';
import getVisibleBeers from './selectors/beers';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {

    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }

};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(startSetBeers()).then(() => {
         renderApp();
         if (history.location.pathname === '/') {
             history.push('/dashboard');
         }
        });        
    } else {
        renderApp();
        history.push('/');
    }
});
