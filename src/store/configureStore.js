import { createStore, combineReducers } from 'redux';
import beersReducer from '../reducers/beers';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            beers: beersReducer,
            filters: filtersReducer
        }),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}; 


