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

store.dispatch(addBeer(
    { 
        beername: 'Primátor Weizenbier / Hefe-Weizen',
        beertype: 'Hefeweizen',
        brewery: 'Primátor',
        ABV: 4.8,
        IBU: 17,
        origin: 'Czech Republic',
        description: 'Top-fermented pale unfiltered wheat beer with a specific aroma, taste and appearance.', 
        price: 195, 
        rating: 3.56, 
        createdAt: "2015-02-08 09:30"
     }));

    store.dispatch(addBeer(
    {   
        beername: 'Colonial Bitter - Oak Aged',
        beertype: 'Extra Special / Strong Beer',
        brewery: 'Mad Scientist',
        ABV: 6.2,
        IBU: 7,
        origin: 'Hungary',
        description: 'Oak Aged ESB ', 
        price: 225, 
        rating: 3.77, 
        createdAt: "2018-02-08 09:30"
    }));

    store.dispatch(addBeer(
        {   
            beername: 'Evermind',
            beertype: 'IPA - Imperial / Double',
            brewery: 'Brew Your Mind',
            ABV: 8.2,
            IBU: 7,
            origin: 'Hungary',
            description: 'Our New England inspired double IPA! It rules with 24g/L hops and lupulin powder ', 
            price: 225, 
            rating: 4.2, 
            createdAt: "2013-02-08 09:30"
    }));
    
const state=store.getState();
const visibleBeers = getVisibleBeers(state.beers, state.filters);
console.log(visibleBeers);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
