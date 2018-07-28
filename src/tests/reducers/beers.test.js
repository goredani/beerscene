import beersReducer from '../../reducers/beers';
import beers from '../fixtures/beers';

test('should set default state', () => {
    const state = beersReducer(undefined, {type: '@@INIT'});
});

test('should remove beer by id', () => {
    const action = {
        type: 'REMOVE_BEER',
        id: beers[1].id
    };
    const state = beersReducer(beers, action);
    expect(state).toEqual([beers[0], beers[2]]);
});

test('should not remove beer by id', () => {
    const action = {
        type: 'REMOVE_BEER',
        id: -1
    };
    const state = beersReducer(beers, action);
    expect(state).toEqual(beers);
});




