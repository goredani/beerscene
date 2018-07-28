import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByABV} from '../actions/filters';


const BeerListFilters = (props) => (
    <div>
        <input 
            type='text' 
            value={props.filters.text} 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }} 
        />
        <p>Sort By</p>
        <select
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
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(BeerListFilters);