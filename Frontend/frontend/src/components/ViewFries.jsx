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
    componentDidMount(){
        FriesService.getFriesById(this.state.id).then(res => {
            this.setState({fries: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Fry Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Restaurant</label>
                            <div>{ this.state.fries.restaurant}</div>

                            <label>City</label>
                            <div>{ this.state.fries.city}</div>

                            <label>Rating</label>
                            <div>{ this.state.fries.rating}</div>

                            <label>Notes</label>
                            <div>{ this.state.fries.notes}</div>

                            <label>Type</label>
                            <div>{ this.state.fries.type}</div>
                        </div>
                    </div>
                </div>       
            </div>
        );
    }
}

export default ViewFries;