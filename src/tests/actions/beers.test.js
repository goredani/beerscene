import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddBeer, addBeer, editBeer, removeBeer } from '../../actions/beers';
import beers from '../fixtures/beers';
import database from '../../firebase/firebase';
import { doesNotReject } from 'assert';

const createMockStore = consfigureMockStore([thunk]);



beforeEach((done) => {
    beersData ={};
    beers.forEach(( { id, beername, beertype, brewery, ABV, IBU, origin, description, price, rating, createdAt}) => {
        beersData[id]={ beername, beertype, brewery, ABV, IBU, origin, description, price, rating, createdAt };
    })
    database.ref('beers').set(beersDate).then(() => done());
});

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
    const action = addBeer(beers[2]);
    expect(action).toEqual({
        type: 'ADD_BEER',
        beer: beers[2]
    });
});

test('should add beer to db and store', () => {
    const store = createMockStore({});
    const beerData = {
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
        createdAt: 1000
    };
    store.dispatch(startAddBeer(beerData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_BEER',
            beer: {
                id: expect.any(String),
                ...beerData
            }
        });
        database.ref(`beers/${actions[0].beer.id}`).once('value');

        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(beerData);
            done();
        });
});

// test('should add beer with defaults to db and store', () => {
    
// });

// test('should setup add beer action object with default values', () => {

// });