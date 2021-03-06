import uuid from 'uuid';
import database from '../firebase/firebase.js';


// ADD BEER

export const addBeer = (beer) => ({
    type: 'ADD_BEER',
    beer
});

export const startAddBeer = (beerData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
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

    return database.ref(`users/${uid}/beers`).push(beer).then((ref) => {
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

export const startRemoveBeer = ({id} = {}) => {
   return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/beers/${id}`).remove().then(() => {
        dispatch(removeBeer({ id }));
    });
   };
};

//EDIT BEER

export const editBeer = ( id, updates) => ({
    type: 'EDIT_BEER',
    id,
    updates
});

export const startEditBeer = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/beers/${id}`).update(updates).then(() => {
            dispatch(editBeer(id, updates));
        });
    };
};

// SET_BEERS 

export const setBeers = (beers) => ({
    type: 'SET_BEERS',
    beers
});

export const startSetBeers = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/beers`).once('value').then((snapshot) => {
            const beers = [];

            snapshot.forEach((childSnapshot) => {
                beers.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setBeers(beers));
        });
    };
};