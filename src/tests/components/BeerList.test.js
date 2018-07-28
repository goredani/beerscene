import React from 'react';
import { shallow } from 'enzyme';
import { BeerList } from '../../components/BeerList';
import beers from '../fixtures/beers'; 

test('should render BeerList with beers', () => {
   const wrapper = shallow(<BeerList beers={beers}/>);
   expect(wrapper).toMatchSnapshot(); 
});

test('should render BeerList with empty message', () => {
    const wrapper = shallow(<BeerList beers={beers}/>);
    expect(wrapper).toMatchSnapshot();
});