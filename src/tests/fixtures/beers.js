import moment from 'moment';

export default [{
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