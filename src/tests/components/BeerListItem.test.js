import React from 'react';
import { shallow } from 'enzyme';
import BeerListItem from '../../components/BeerListItem';
import beers from '../fixtures/beers';

test('should reder BeerListItem with fixture data', () => {
    const wrapper = shallow(<BeerListItem {...beers[0]} />);
    expect(wrapper).toMatchSnapshot;
});