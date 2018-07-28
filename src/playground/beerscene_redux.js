import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ACTION GENERATORS


// ADD BEER

const addBeer = (
    {   
        id = '',
        beername = 'No name',
        beertype='No type',
        brewery = 'Unknown brewery',
        origin = 'Unknown origin',
        description = 'No Description', 
        ABV ='No ABV', 
        IBU='NO IBU', 
        price='',
        createdAt=0,
        rating=0
    } = {}
) => ({
    type: 'ADD_BEER',
    beer: {
        id: uuid(),
        beername,
        beertype,
        brewery,
        origin,
        description,
        ABV,
        IBU,
        price,
        createdAt,
        rating
    }
});

//REMOVE

 const removeBeer = ({ id } = {}) => ({
    type: 'REMOVE_BEER',
    id
});

//EDIT BEER

const editBeer = ( id, updates) => ({
    type: 'EDIT_BEER',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_NAME
const sortByBeerName = () => ({
    type: 'SORT_BY_BEERNAME'
  });

  // SORT_BY_TYPE
const sortByBeerType = () => ({
    type: 'SORT_BY_BEERTYPE'
  });

// SORT_BY_BREWERY
const sortByBrewery = () => ({
    type: 'SORT_BY_BREWERY'
  });

  // SORT_BY_ABV
const sortByABV = () => ({
    type: 'SORT_BY_ABV'
  });

    // SORT_BY_IBU
const sortByIBU = () => ({
    type: 'SORT_BY_IBU'
  });

    // SORT_BY_PRICE
const sortByPrice = () => ({
    type: 'SORT_BY_PRICE'
  });

    // SORT_BY_DATE
    const sortByDate = () => ({
        type: 'SORT_BY_DATE'
      });
    

  
  // SORT_BY_RATING
  const sortByRating = () => ({
    type: 'SORT_BY_RATING'
  });

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  // SET_END_DATE
  const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });

// BEER REDUCER

const beersReducerDefaultState = [];

const beersReducer = (state = beersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BEER':
            return [
                ...state,
                action.beer
            ];
        case 'REMOVE_BEER':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_BEER':
            return state.map((beer) => {
                if(beer.id === action.id) {
                    return {
                        ...beer,
                        ...action.updates
                    };
                } else {
                    return beer;
                }
            }); 
        default:
            return state;
    }
};

// FILTER REDUCER

const filersReducerDefaultState = {
    text: '',
    sortBy: 'ABV',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_BEERNAME':
      return {
          ...state,
          sortBy: 'beername'
      };

    case 'SORT_BY_BEERTYPE':
      return {
          ...state,
          sortBy: 'beertype'
      };

    case 'SORT_BY_BREWERY':
        return {
          ...state,
          sortBy: 'brewery'
    };

    case 'SORT_BY_ABV':
    return {
      ...state,
      sortBy: 'ABV'
    };

    case 'SORT_BY_IBU':
    return {
      ...state,
      sortBy: 'IBU'
    };

    case 'SORT_BY_PRICE':
    return {
      ...state,
      sortBy: 'IBU'
    };


    case 'SORT_BY_RATING':
      return {
        ...state,
        sortBy: 'rating'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};


// Get visibel beers
const getVisibleBeers = (beers, { text, sortBy, startDate, endDate }) => {
    return beers.filter((beer) => {
      const startDateMatch = typeof startDate !== 'number' || beer.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || beer.createdAt <= endDate;
      const textMatch = beer.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'rating') {
            return a.rating > b.rating ? 1 : -1;
        } 
        else if (sortBy === 'beername') {
            return a.beername > b.beername ? 1 : -1;
        } 
        else if (sortBy === 'beertype') {
            return a.beertype > b.beertype ? 1 : -1;
        } 
        else if (sortBy === 'brewery') {
            return a.brewery > b.brewery ? 1 : -1;
        } 
        else if (sortBy === 'ABV') {
            return a.ABV > b.ABV ? 1 : -1;
        } 
        else if (sortBy === 'IBU') {
            return a.IBU > b.IBU ? 1 : -1;
        }
        else if (sortBy === 'price') {
            return a.price > b.price ? 1 : -1;
        }
    });
  };
  


// STORE

const store = createStore(
    combineReducers({
        beers: beersReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleBeers = getVisibleBeers(state.beers, state.filters);
    console.log(visibleBeers);
});

const beerOne = store.dispatch(addBeer(
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
        createdAt: -5000
     }));

    const beerTwo = store.dispatch(addBeer(
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
        createdAt: 1000
    }));

// store.dispatch(removeBeer({ id: beerOne.beer.id}));

// store.dispatch(editBeer(beerTwo.beer.id, { price: 999 }));


// store.dispatch(sortByBeerName());
// store.dispatch(sortByBeerBrewery());
// store.dispatch(sortBeerType());
// store.dispatch(sortByABV());
store.dispatch(sortByIBU());
// store.dispatch(sortByPrice());
// store.dispatch(sortByRating());
// store.dispatch(sortByDate());

// store.dispatch(setTextFilter(''));


// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250


// STATES

const beerState = {
    beers: [{
        id: '1231561',
        beername: 'Anchor Steam Beer',
        beertype: 'Extra Special',
        brewery: 'California Common',
        ABV: 4.5,
        IBU: 35,
        origin: 'California',
        description: 'San Francisco s famous Anchor Steam®, the classic of American brewing tradition since 1896, is virtually handmade',
        price: 200,
        createdAt: 0,
        rating: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'ABV',
        startDate: undefined,
        endDate: undefined
    }
};