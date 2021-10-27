import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className = "Header">
                        <h1>Don't be Salty, it's Almost Fryday!</h1>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/fries">Rate your Fries</Link></li>
                                <li><Link to="/recipe">Recipe</Link></li>
                                <li><Link to="/beerpairing">Beer Pairing</Link></li>
                            </ul>
                   </nav>
                </header>
            </div>
        );
    }
}

export default Header;