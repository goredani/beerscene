

const beersReducerDefaultState = [];

export default (state = beersReducerDefaultState, action) => {
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
        case 'SET_BEERS':
            return action.beers;
        default:
            return state;
    }
};

