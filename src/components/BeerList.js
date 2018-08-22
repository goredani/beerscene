import React from 'react';
import { connect } from 'react-redux';
import BeerListItem from './BeerListItem';
import selectBeers from '../selectors/beers';
import { Link } from 'react-router-dom';

export const BeerList = (props) => (
    <div className="content-container">
        <h1> Live Taplist </h1> 
        <div className="list-header">
            <div>Beer Name</div>
            <div className="show-for-desktop">Beer Type</div>
            <div className="show-for-desktop">Brewery</div>
            <div className="show-for-desktop">IBU</div>
            <div className="show-for-desktop">ABV</div>
            <div>Price</div> 
            <div className="show-for-desktop">Rating</div> 
            <div >Recency</div> 
              
        </div>
        <div className="list-body">
        
        {
            props.beers.length === 0 ? (
                <div className="list-item list-item--message">
                   <div> 
                       <span><p>There are no beers on your taplist.</p></span>
                    </div> 
                    <div>
                      <Link className="button" to="/create">Add Beer</Link>
                    </div>
                </div>
                
            ) : (
                props.beers.map((beer) => {
                    return <BeerListItem key={beer.id} {...beer}/>
                })
            )

        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        beers: selectBeers(state.beers, state.filters)
    };
};

export default connect(mapStateToProps)(BeerList);

