import React from 'react';
import { connect } from 'react-redux';
import BeerForm from './BeerForm';
import { startAddBeer } from '../actions/beers';

export class AddBeerPage extends React.Component {
  onSubmit = (beer) => {
    this.props.startAddBeer(beer);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Beer</h1>
          </div>
        </div>
        <div className="content-container">
          <BeerForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddBeer: (beer) => dispatch(startAddBeer(beer))
});


export default connect(undefined, mapDispatchToProps)(AddBeerPage);
