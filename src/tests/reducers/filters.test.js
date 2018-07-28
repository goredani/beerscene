import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'ABV',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to beername', () => {
    const state =filtersReducer(undefined, { type: 'SORT_BY_BEERNAME' });
    expect(state.sortBy).toBe('beername');
});

test('should set sortBy to brewery', () => {
    const state =filtersReducer(undefined, { type: 'SORT_BY_BREWERY' });
    expect(state.sortBy).toBe('brewery');
});