import React from 'react';
import { connect } from 'react-redux';
import BeerForm from './BeerForm';
import { startEditBeer, startRemoveBeer } from '../actions/beers';


export class EditBeerPage extends React.Component {
  onSubmit = (beer) => {
    this.props.startEditBeer(this.props.beer.id, beer);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveBeer({id: this.props.beer.id});
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit <span>{this.props.beer.beername}</span></h1>
          </div>
        </div>
        <div className="content-container">
        <BeerForm 
          beer={this.props.beer}
          onSubmit={this.onSubmit}
        />
          <button className="button button--secondary" onClick={this.onRemove} >
          Remove Beer
          </button>
        </div>
        
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
  startEditBeer: (id, beer) => dispatch(startEditBeer(id, beer)),
  startRemoveBeer: (data) => dispatch(startRemoveBeer(data))
});

export default connect(mapStateToProps, mapDispatchToProps)( EditBeerPage);
