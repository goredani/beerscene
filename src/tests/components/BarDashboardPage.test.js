import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import BarDashboardPage from '../../components/BarDashboardPage';

test('should render Dashboard correctly', () => {
    const wrapper = shallow(<BarDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();

});
