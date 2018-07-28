import moment from 'moment';

// FILTER REDUCER

const filersReducerDefaultState = {
    text: '',
    sortBy: 'ABV',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filersReducerDefaultState, action) => {
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
