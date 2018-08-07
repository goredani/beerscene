import React from 'react';
import {shallow} from 'enzyme';
import {BeersSummary} from '../../components/BeersSummary';

test('should correctly render BeersSummary with 1 beer', () => {
    const wrapper = shallow(<BeersSummary beerCount={1} beersTotal={195} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render BeersSummary with multiple beers', () => {
    const wrapper = shallow(<BeersSummary beerCount={23} beersTotal={195233} />);
    expect(wrapper).toMatchSnapshot();
});

