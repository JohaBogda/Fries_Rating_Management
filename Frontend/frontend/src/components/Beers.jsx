import React, { Component } from 'react';

class Beers extends Component {
    render() {
        return (
            <div className="beer">
                <h2>Fries <span className="heart"> ♡ </span>Beers</h2>
                <p>Follow the below list of matches made in heaven for your ultimate French... or shall I say Belgian Fries experience: </p>
                <h5>Classic French Fries <span className="heart"> ♡ </span>American Lager</h5>
                <h5>Curly Fries <span className="heart"> ♡ </span>Witbier</h5>
                <h5>Poutine <span className="heart"> ♡ </span>Dark/ Brown Ale</h5>
                <h5>Classic French Fries <span className="heart"> ♡ </span>American Lager</h5>
                <h5>Classic French Fries <span className="heart"> ♡ </span>American Lager</h5>
                <h5>Classic French Fries <span className="heart"> ♡ </span>American Lager</h5>
                <p>I shall render an API here one day... </p>
            </div>
        );
    }
}

export default Beers;