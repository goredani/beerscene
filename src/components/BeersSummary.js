import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectBeers from '../selectors/beers';
import selectBeersTotal from '../selectors/beers-total';

export const BeersSummary = ({ beersCount, beersTotal }) => {
    const beersWord = beersCount === 1 ? 'beer' : 'beers';
    const formattedBeersTotal = numeral(beersTotal).format('$0,0');
  
    return (
        <div>
            <h1>Viewing {beersCount} {beersWord} totalling for {formattedBeersTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleBeers = selectBeers(state.beers, state.filters);

    return {
        beersCount: visibleBeers.length,
        beersTotal: selectBeersTotal(visibleBeers)
    };
};

export default connect(mapStateToProps)(BeersSummary);