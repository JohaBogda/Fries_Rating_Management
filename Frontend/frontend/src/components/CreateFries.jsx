import React, { Component } from 'react';
import FriesService from '../services/FriesService';

class CreateFries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2:
            id: this.props.match.params.id,

            restaurant: "",
            city: "",
            rating: "",
            notes: "",
            type: ""

        }
        this.changeRestaurantHandler = this.changeRestaurantHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
        this.changeNotesHandler = this.changeNotesHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);

        this.saveOrUpdateFries = this.saveOrUpdateFries.bind(this);
    }

    // step 3:
    componentDidMount() {

        // step 4: 
        if (this.state.id === "add") {
            return
        } else {
            FriesService.getFriesById(this.state.id).then((res) => {
                console.log(res.data);

                let fries = res.data;
                this.setState({

                    city: fries.city,
                    notes: fries.notes,
                    rating: fries.rating,
                    restaurant: fries.restaurant,
                    type: fries.type
                })
            })
        }
    }

    // eventhandler needed for submission; value of this event sets value for new state: 
    changeRestaurantHandler = (event) => {
        this.setState({ restaurant: event.target.value });
    }

    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }

    changeRatingHandler = (event) => {
        this.setState({ rating: event.target.value });
    }

    changeNotesHandler = (event) => {
        this.setState({ notes: event.target.value });
    }

    changeTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }

    saveOrUpdateFries = (e) => {
        e.preventDefault();
        let fries = {
            restaurant: this.state.restaurant,
            city: this.state.city,
            rating: this.state.rating,
            notes: this.state.notes,
            type: this.state.type
        };

        console.log(fries);

        if (this.state.id === "add") {

            // once sent to be stored in database: 
            FriesService.createFries(fries).then(res => {
                // navigate to homepage: 
                this.props.history.push("/fries");
            });
        } else {
            FriesService.updateFries(fries, this.state.id).then(res => {
                this.props.history.push("/fries");
            })
        }
    }

    cancel() {
        this.props.history.push("/fries");
    }

    // same router /add-fries/id but different titles depending on what button us clicked:
    getTitle() {
        if (this.state.id === "add") {
            return <h3 className="text-center">Add Fries</h3>
        } else {
            return <h3 className="text-center">Update Fries</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name of Restaurant</label>
                                        <input placeholder="Restaurant" name="restaurant" className="form-control"
                                            value={this.state.restaurant} onChange={this.changeRestaurantHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input placeholder="City" name="city" className="form-control"
                                            value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Rate dem fries ☆ out of 5</label>
                                        <input placeholder="Rating" name="rating" className="form-control"
                                            value={this.state.rating} onChange={this.changeRatingHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Important Notes</label>
                                        <input placeholder="Notes" name="notes" className="form-control"
                                            value={this.state.notes} onChange={this.changeNotesHandler} />
                                    </div>


                                    <label className="form-group" for="business">Typah Fries: </label>
                                    {/* add value & onChange to <select> in order to have values saved to database: */}
                                    <select value={this.state.type} onChange={this.changeTypeHandler} id="business" name="business">
                                        <option placeholder="Type" name="type" className="form-control" value="Standard">Classic</option>
                                        <option placeholder="Type" name="type" className="form-control" value="Curly">Curly</option>
                                        <option placeholder="Type" name="type" className="form-control" value="Sweet Potato">Sweet Potato</option>
                                        <option placeholder="Type" name="type" className="form-control" value="Waffle">Waffle</option>
                                        <option placeholder="Type" name="type" className="form-control" value="Steak/ Wedge">Steak/ Wedge</option>
                                        <option placeholder="Type" name="type" className="form-control" value="Crinkle">Crinkle</option>
                                    </select>

                                    <br></br>
                                    <button onClick={this.saveOrUpdateFries}>Save</button>
                                    <button onClick={this.cancel.bind(this)}>Abort Mission</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateFries;
