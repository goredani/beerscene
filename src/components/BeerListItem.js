import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

// let recency = (state, props) => {
//   let currentDate = new Date();
//   return(props.beer.createdAt - currentDate);
// };

// console.log(recency());

const BeerListItem = ({ dispatch, id, beername, beertype, brewery, ABV, createdAt, rating, price }) => {
    return(
   <div>
        <h3>Name: {beername}</h3>
        <p>Type: {beertype} - Brewery: {brewery}</p>
        <p>ABV: {ABV}</p>
        <p>Added: {moment(createdAt).format('YYYY-MM-DD')}</p>
        <p>Recency: {moment(createdAt).fromNow()}</p>
        <p>Rating: {rating} - Price: {price} HUF</p>
        
        <Link to={`/edit/${id}`}>
            <button>
                Edit Beer
            </button>
        </Link>
    
    </div>
    
   );
};




export default (BeerListItem);