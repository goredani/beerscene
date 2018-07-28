import { addBeer, editBeer, removeBeer } from '../../actions/beers';

test('should setup remove beer action object', () => {
    const action = removeBeer({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_BEER',
        id: '123abc'
    });
});

test('should setup edit beer action object', () => {
    const action = editBeer('123abc', {description: 'lofasz'});
    expect(action).toEqual({
        type: 'EDIT_BEER',
        id: '123abc',
        updates: {
            description: 'lofasz'
        }
    });
});

test('should setup add beer action object with provided values', () => {
    const beerData = {
        beername: 'Lofasz Beer',
        beertype: 'IPA',
        brewery: 'tutu',
        ABV: 12,
        IBU: 12,
        origin: 'tata',
        description: 'nyenye',
        price: 1235,
        rating: 12,
        createdAt: '2016-06-03'
    };
    const action = addBeer(beerData);
    expect(action).toEqual({
        type: 'ADD_BEER',
        beer: {
            ...beerData,
            id: expect.any(String)
        }
    });
});


// test('should setup add beer action object with default values', () => {

// });