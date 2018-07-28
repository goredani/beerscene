import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addBeer} from './actions/beers';
import {setTextFilter} from './actions/filters';
import getVisibleBeers from './selectors/beers';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();





const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
