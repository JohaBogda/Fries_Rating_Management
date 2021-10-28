import React, { Component } from 'react';

class Beers extends Component {

    constructor(props) {
        super(props);
        this.state = {beers:[]}

        // Another try to render API: 
        // this.state = {beers:[]}
        // query: "";
        // results: {};
        // loading: false;
        // message: ""
     
    }
    

    //api call: 
    componentDidMount(){
        fetch('https://api.punkapi.com/v2/beers').then(resp=>resp.json())
        .then(resp=>this.setState({beers:resp}))
    }

//    // TBD for the API search: 
//     handleOnInputChange = (event) => {
//         const query = event.target.value;
//         console.log(query)
//         this.setState({query:query})
//     }

//     // TBD for the API search:
//     handleSubmit = (event) => {
//         //default behavior to avoid website from refreshing entirely 
//         event.preventDefault()
        
//     }

    render() {
        return (
            <div className="beer">
                <h2>Fries <span className="heart"> ♡ </span>Beers</h2>
                <br></br>
                <p>Follow the below list of matches made in heaven for your ultimate French... or shall I say Belgian Fries experience: </p>
                <h5>Classic French Fries <span className="heart"> ♡ </span>American Lager</h5>
                <h5>Curly/ Sweet Potato <span className="heart"> ♡ </span>Witbier/ IPA</h5>
                <h5>Poutine Smothered<span className="heart"> ♡ </span>Dark/ Brown Ale</h5>
                <h5>Steak/ Wedges <span className="heart"> ♡ </span>Pale Lager</h5>

                <form onSubmit={this.handleSubmit}>
                <label className="search-label" htmlFor="search-input">Search for a beer: </label>
                    <input type="text" value="" id="search-input" placeholder="Search" onChange={this.handleOnInputChange}/>
                    <button type="submit" form="form1" value="Submit">Submit</button>
                </form>


                {this.state.beers.map(beer=><div key={beer.id} >Name: {beer.name}.<br></br>Tagline:{beer.tagline}.<br></br>Description:{beer.description}</div>)}

            </div>
        );
    }
}

export default Beers;