import selectBeersTotal from '../../selectors/beers-total';
import beers from '../fixtures/beers';
import { resolveNaptr } from 'dns';

test('should return 0 if no beers', ()=> {
    const res = selectBeersTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single beer', ()=> {
    const res = selectBeersTotal([beers[0]]);
    expect(res).toBe(195);
});

test('should correctly add up a multiple beers', ()=> {
    const res = selectBeersTotal(beers[0]);
    expect(res).toBe(585);
});