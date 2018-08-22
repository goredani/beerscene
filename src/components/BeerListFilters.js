import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByABV} from '../actions/filters';


const BeerListFilters = (props) => (
    <div className="content-container">
        <div className="input-group">
          
            <div className="input-group__item">
            <p>Search</p>
                <input 
                    type='text' 
                    className='text-input'
                    placeholder='Search for beers'
                    value={props.filters.text} 
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }} 
                />      
            </div>    

            <div className="input-group__item">
            <p>Sort By</p>
                <select
                        className="select"
                        value={props.filters.sortBy}
                        onChange={(e) => {
                            if (e.target.value === 'date') {
                                props.dispatch(sortByDate());
                            } else if (e.target.value === 'ABV') {
                                props.dispatch(sortByABV());
                            } 
                        }}
                    >
                <option value="date">Date</option>
                <option value="ABV">ABV</option>
                 </select>
            </div>
        </div>
       
      
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(BeerListFilters);