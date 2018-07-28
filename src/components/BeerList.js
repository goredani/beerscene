import React from 'react';
import { connect } from 'react-redux';
import BeerListItem from './BeerListItem';
import selectBeers from '../selectors/beers';

export const BeerList = (props) => (
    <div>
        <h1> Beer List </h1> 
        {
            props.beers.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.beers.map((beer) => {
                    return <BeerListItem key={beer.id} {...beer}/>
                })
            )

        }
    
    </div>
);

const mapStateToProps = (state) => {
    return {
        beers: selectBeers(state.beers, state.filters)
    };
};

export default connect(mapStateToProps)(BeerList);

