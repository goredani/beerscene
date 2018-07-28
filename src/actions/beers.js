import uuid from 'uuid';



// ADD BEER

export const addBeer = (
    {   
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
    } = {}
) => ({
    type: 'ADD_BEER',
    beer: {
        id: uuid(),
        beername,
        beertype,
        brewery,
        ABV,
        IBU,
        origin,
        description,
        price,
        rating,
        createdAt
    }
});

//REMOVE

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