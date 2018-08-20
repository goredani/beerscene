import React from 'react';
import { connect } from 'react-redux';
import BeerForm from './BeerForm';
import { editBeer, startRemoveBeer } from '../actions/beers';


export class EditBeerPage extends React.Component {
  onSubmit = (beer) => {
    this.props.editBeer(this.props.beer.id, beer);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveBeer({id: this.props.beer.id});
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <BeerForm 
          beer={this.props.beer}
          onSubmit={this.onSubmit}
        />
          <button onClick={this.onRemove} >
          Remove
          </button>
      </div>
    );
   }
};


const mapStateToProps = (state, props) => ({
    beer: state.beers.find((beer) => {
      return beer.id === props.match.params.id;
    })
  
});

const mapDispatchToProps = (dispatch, props) => ({
  editBeer: (id, beer) => dispatch(editBeer(id, beer)),
  startRemoveBeer: (data) => dispatch(startRemoveBeer(data))
});

export default connect(mapStateToProps, mapDispatchToProps)( EditBeerPage);
