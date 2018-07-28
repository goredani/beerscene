import selectBeers from '../../selectors/beers';
import moment from 'moment';

const beers = [{
    id: '1',
    beername: 'Babbaba',
    beertype: 'Hefeweizen',
    brewery: 'Primátor',
    ABV: 4.8,
    IBU: 1,
    origin: 'Czech Republic',
    description: 'Bababab', 
    price: 195, 
    rating: 3.56, 
    createdAt: 0
}, {
    id: '2',
    beername: 'Rererere',
    beertype: 'Hefeweizen',
    brewery: 'Csecs',
    ABV: 4.8,
    IBU: 2,
    origin: 'Czech Republic',
    description: 'Fefefe', 
    price: 195, 
    rating: 3.56, 
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    beername: 'Nyenye',
    beertype: 'Hefeweizen',
    brewery: 'Cseceeeelkfjs',
    ABV: 4.8,
    IBU: 3,
    origin: 'Czech Republic',
    description: 'TEtete', 
    price: 195, 
    rating: 3.56, 
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectBeers(beers, filters);
    expect(result).toEqual([ beers[2], beers[1]]);
});

test('should filter by startDate', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectBeers(beers, filters);
    expect(result).toEqual([beers[2], beers[0], beers[1]]);
});

// test('should filter by endDate', ()=> {
//     const filters = {
//         text: '',
//         sortBy: 'date',
//         startDate: undefined,
//         endDate: moment(0).add(2, 'days')
//     };
//     const result = selectBeers(beers, filters);
//     expect(result).toEqual([beers[0], beers[1], beers[2]]);
// });

test('should sort by date', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectBeers(beers, filters);
    expect(result).toEqual([beers[2], beers[0], beers[1]]);
});

test('should sort by IBU', ()=> {
    const filters = {
        text: '',
        sortBy: 'IBU',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectBeers(beers, filters);
    expect(result).toEqual([beers[0], beers[1], beers[2]]);
});