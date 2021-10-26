import React, { Component } from 'react';
import FriesService from '../services/FriesService';

class ViewFries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // get id from route: 
            id: this.props.match.params.id,
            fries: {}
        }
    }

    // method immediately called after mounted: 
    componentDidMount() {
        FriesService.getFriesById(this.state.id).then(res => {
            this.setState({ fries: res.data });
        })
    }

    back() {
        this.props.history.push("/fries");
    }

    render() {
        return (
                <div className="view" className="card col-md-6 offset-md-3 text-center text-black">
                    <h3>Fry Details</h3>
                    <div >
                        <div>
                            <div className="labelRow">
                                <label>Restaurant:</label>
                                <div>{this.state.fries.restaurant}</div>
                            </div>

                            <div className="labelRow">
                                <label>City:</label>
                                <div>{this.state.fries.city}</div>
                            </div>

                            <div className="labelRow">
                                <label>Rated:</label>
                                <div>{this.state.fries.rating}</div>
                            </div>

                            <div className="labelRow">
                                <label>Notes:</label>
                                <div>{this.state.fries.notes}</div>
                            </div>

                            <div className="labelRow">
                                <label>Type:</label>
                                <div>{this.state.fries.type}</div>
                            </div>

                        </div>
                    </div>
                    <button onClick={this.back.bind(this)}>Take me back</button>
                </div>

        );
    }
}

export default ViewFries;