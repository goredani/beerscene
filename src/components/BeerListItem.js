import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';


const BeerListItem = ({ dispatch, id, beername, beertype, brewery, origin, ABV, IBU, createdAt, rating, price }) => {
    return(
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{beername}</h3>
            </div>
            
            <p>{beertype}</p>
            <p>{brewery}</p>
            {/* <p>Origin: {origin}</p> */}
            <p>{IBU}</p>
            <p>{ABV}</p>
            {/* <p>Added: {moment(createdAt).format('YYYY-MM-DD')}</p> */}
            <p>{numeral(price).format('$0,0')}</p>
            <p>{rating}</p>
            <p>{moment(createdAt).fromNow()}</p>
            
           
            
                {/* <button>
                    Edit Beer
                </button> */}
        </Link>
    
   
    
   );
};




export default (BeerListItem);