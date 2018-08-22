import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectBeers from '../selectors/beers';
import selectBeersTotal from '../selectors/beers-total';

export const BeersSummary = ({ beersCount, beersTotal }) => {
    const beersWord = beersCount === 1 ? 'beer' : 'beers';
    const formattedBeersTotal = numeral(beersTotal).format('$0,0');
  
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{beersCount}</span> {beersWord} totalling for <span> {formattedBeersTotal} </span> </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Beer</Link>
                </div>
            </div>
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