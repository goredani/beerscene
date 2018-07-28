import React from  'react';
import { shallow } from 'enzyme';
import beers from '../fixtures/beers';
import { EditBeerPage } from '../../components/EditBeerPage';

let editBeer, removeBeer, history, wrapper;

beforeEach(() => {
    editBeer = jest.fn();
    removeBeer = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditBeerPage 
        editBeer={editBeer} 
        removeBeer={removeBeer}
        history={history}
        beer={beers[2]}
    />
    );
});

test('should render EditBeerPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editbeer', () => {
    wrapper.find('BeerForm').prop('onSubmit')(beers[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editBeer).toHaveBeenCalledWith(beers[2].id.beers[2]);
});

test('should hande removebeer', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeBeer).toHaveBeenCalledWith({
        id: beers[2].id
    });
});
