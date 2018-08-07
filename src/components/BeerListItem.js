import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';


// let recency = (state, props) => {
//   let currentDate = new Date();
//   return(props.beer.createdAt - currentDate);
// };

// console.log(recency());

const BeerListItem = ({ dispatch, id, beername, beertype, brewery, origin, ABV, createdAt, rating, price }) => {
    return(
   <div>
        <h3>Name: {beername}</h3>
        <p>Type: {beertype} - Brewery: {brewery}</p>
        <p>Origin: {origin}</p>
        <p>ABV: {ABV}</p>
        <p>Added: {moment(createdAt).format('YYYY-MM-DD')}</p>
        <p>Recency: {moment(createdAt).fromNow()}</p>
        <p>Rating: {rating} - Price: {numeral(price).format('$0,0')}</p>
        <Link to={`/edit/${id}`}>
            <button>
                Edit Beer
            </button>
        </Link>
    
    </div>
    
   );
};




export default (BeerListItem);