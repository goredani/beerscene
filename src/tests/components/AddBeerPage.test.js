import React from 'react';
import { shallow}  from 'enzyme';
import { AddBeerPage } from '../../components/AddBeerPage';
import beers from '../fixtures/beers';

let addBeer, history, wrapper;
    addBeer = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddBeerPage addBeer={addBeer} history={history} />);
beforeEach(()=> {

});

test('should render AddBeerPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('BeerForm').prop('onSubmit')(beers[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addBeer).toHaveBeenLastCalledWith(beers[1]);
});