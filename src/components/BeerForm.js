import React from 'react';
import moment from  'moment';


let regex = /^\d{1,}(\.\d{0,2})?$/;

export default class BeerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            beername: props.beer ? props.beer.beername : '',
            beertype: props.beer ? props.beer.beertype : '',
            brewery: props.beer ? props.beer.brewery : '',
            description: props.beer ? props.beer.description : '',
            price: props.beer ? (props.beer.price / 100).toString() : '',
            rating: props.beer ? (props.beer.rating / 100).toString() : '',
            ABV: props.beer ? (props.beer.ABV / 100).toString() : '',
            IBU: props.beer ? (props.beer.IBU / 100).toString() : '',
            origin: props.beer ? props.beer.origin : '',
            createdAt: '',
            error: ''
        };
    }

    onBeerNameChange = (e) => {
        const beername = e.target.value;
        this.setState(() => ({beername}));
    };

    onBeerTypeChange = (e) => {
        const beertype = e.target.value;
        this.setState(() => ({beertype}));
    };

    onBreweryChange = (e) => {
        const brewery = e.target.value;
        this.setState(() => ({brewery}));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onABVChange = (e) => {
        const ABV = e.target.value;

        if (!ABV || ABV.match(regex)) {
            this.setState(() => ({ ABV }))
        }
    };
    onIBUChange = (e) => {
        const IBU = e.target.value;
        if (!IBU || IBU.match(regex)) {
            this.setState(() => ({IBU}))
        }
    };
    onOriginChange = (e) => {
        const origin = e.target.value;
        this.setState(() => ({ origin }));
    };
 
    onPriceChange = (e) => {
        const price = e.target.value;
        if (!price || price.match(regex)) {
            this.setState(() => ({price}));
        }
    };

    onRatingChange = (e) => {
        const rating = e.target.value;
        if (!rating || rating.match(regex)) {
            this.setState(() => ({rating}));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));
        }

    }

    

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.beername) {
            this.setState(() => ({error: 'Please provide the name of the beer'}));
        } else if (!this.state.beertype) {
            this.setState(() => ({error: 'Please provide the type of the beer'}));
        } else {
            this.setState(()=> ({ error: ''}));
            this.props.onSubmit({
                beername: this.state.beername,
                beertype: this.state.beertype,
                brewery: this.state.brewery,
                ABV: parseFloat(this.state.ABV, 10 *100),
                IBU: parseFloat(this.state.IBU, 10 *100),
                brewery: this.state.origin,
                description: this.state.description,
                price: parseFloat(this.state.price, 10) *100,
                rating: parseFloat(this.state.rating, 10) *100,
                createdAt: moment().format('YYYY-MM-DD HH:MM')
            });
        }
    };
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Beer Name"
                        autoFocus
                        value={this.state.beername}
                        onChange={this.onBeerNameChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Beer Type"
                        value = {this.state.beertype}
                        onChange = {this.onBeerTypeChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Brewery"
                        value = {this.state.brewery}
                        onChange = {this.onBreweryChange}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="ABV"
                        value={this.state.ABV}
                        onChange={this.onABVChange}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="IBU"
                        value={this.state.IBU}
                        onChange={this.onIBUChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Country Origin"
                        value={this.state.origin}
                        onChange={this.onOriginChange}
                    />
                    <br />
                    <textarea
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}>
                    </textarea>
                    <br />
                    <input
                        type="number"
                        placeholder="Price"
                        value={this.state.price}
                        onChange={this.onPriceChange}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Rating"
                        value={this.state.rating}
                        onChange={this.onRatingChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder={moment().format('YYYY, ddd, hA')}
                     />
                  
                    
                   
                    <button>Add Beer</button>
                </form>
            </div>
        )
    }
}

