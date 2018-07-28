export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_NAME
export const sortByBeerName = () => ({
    type: 'SORT_BY_BEERNAME'
  });

  // SORT_BY_TYPE
export const sortByBeerType = () => ({
    type: 'SORT_BY_BEERTYPE'
  });

// SORT_BY_BREWERY
export const sortByBrewery = () => ({
    type: 'SORT_BY_BREWERY'
  });

  // SORT_BY_ABV
export const sortByABV = () => ({
    type: 'SORT_BY_ABV'
  });

    // SORT_BY_IBU
export const sortByIBU = () => ({
    type: 'SORT_BY_IBU'
  });

    // SORT_BY_PRICE
export const sortByPrice = () => ({
    type: 'SORT_BY_PRICE'
  });

    // SORT_BY_DATE
    export const sortByDate = () => ({
        type: 'SORT_BY_DATE'
      });
    

  
      // SORT_BY_RATING
  export const sortByRating = () => ({
    type: 'SORT_BY_RATING'
  });

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  // SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });
