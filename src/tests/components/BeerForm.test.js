import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import BeerForm from '../../components/BeerForm';
import beers from  '../fixtures/beers';

test('should render BeerForm correctly', () => {
    const wrapper = shallow(<BeerForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render BeerForm correctly with beer data', () => {
    const wrapper = shallow(<BeerForm beer={beers[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

// test('should render error for invalid form submission', () => {
//     const wrapper = shallow(<BeerForm />);
//     wrapper.find('form').simulate('submit', {
//         preventDefault: () => {}
//     });
//     expect(wrapper.state('error').length).toBeGreaterThan(0);
//     expect(wrapper).toMatchSnapshot();
// });

test('should set description on input change', () => {
    const value = 'New Beer';
    const wrapper = shallow(<BeerForm />);
    wrapper.find('input').at(0). simulate('change', {
        target: { value }
    });
    expect(wrapper.state('beername')).toBe(value);
});

// test('should set note on textarea change', () => {
//     const value = 'New note value';
//     const wrapper = shallow(<BeerForm />);
//     wrapper.find('textarea').simulate('change', {
//         target: { value }
//     });
//     expect(wrapper.state('note')).toBe(value);
// });

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<BeerForm beer={beers[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').toBe(''));
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        beername: beers[0].beername,
        beertype: beers[0].beertype,
        brewery: beers[0].brewery,
        ABV: beers[0].ABV,
        IBU: beers[0].IBU,
        brewery: beers[0].brewery,
        description: beers[0].description,
        price: beers[0].price,
        rating: beers[0].rating,
        createdAt: beers[0].createdAt
    });

});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<BeerForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<BeerForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')( {focused});
  expect(wrapper.state('caledarFocused').toBe(focused));
});