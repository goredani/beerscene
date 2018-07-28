import React from 'react';
import { connect } from 'react-redux';
import BeerForm from './BeerForm';
import { addBeer } from '../actions/beers';

export class AddBeerPage extends React.Component {
  onSubmit = (beer) => {
    this.props.addBeer(beer);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Beer</h1>
        <BeerForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBeer: (beer) => dispatch(addBeer(beer))
});


export default connect(undefined, mapDispatchToProps)(AddBeerPage);
