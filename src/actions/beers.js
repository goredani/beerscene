import uuid from 'uuid';
import database from '../firebase/firebase.js';


// ADD BEER

export const addBeer = (beer) => ({
    type: 'ADD_BEER',
    beer
});

export const startAddBeer = (beerData = {}) => {
    return (dispatch) => {
        const {
            beername ='',
            beertype = '',
            brewery = '',
            ABV ='', 
            IBU='', 
            origin = '',
            description = '', 
            price='',
            rating = '',
            createdAt=0
        } = beerData;

        const beer = { beername, beertype, brewery, ABV, IBU, origin, description, price, rating, createdAt}

    return database.ref('beers').push(beer).then((ref) => {
           dispatch(addBeer({
               id: ref.key,
               ...beer
           })); 
        });
    };
};

//REMOVE BEER

export const removeBeer = ({ id } = {}) => ({
    type: 'REMOVE_BEER',
    id
});

//EDIT BEER

export const editBeer = ( id, updates) => ({
    type: 'EDIT_BEER',
    id,
    updates
});