import React, { Component } from 'react';

class CreateFries extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

        this.saveFries = this.saveFries.bind(this);
    }
    
    // eventhandler needed for submission; value of this event sets value for new state: 
    changeRestaurantHandler=(event)=> {
        this.setState({restaurant: event.target.value});
    }

    changeCityHandler=(event)=> {
        this.setState({city: event.target.value});
    }

    changeRatingHandler=(event)=> {
        this.setState({city: event.target.value});
    }

    changeNotesHandler=(event)=> {
        this.setState({city: event.target.value});
    }

    changeTypeHandler=(event)=> {
        this.setState({city: event.target.value});
    }

    saveFries = (e) => {
        e.preventDefault();
        let fries = {restaurant: this.state.restaurant, city: this.state.city, rating: this.state.rating, notes: this.state.notes, type: this.state.type};
        console.log("fries => " + JSON.stringify(fries));
    }

    cancel(){
        this.props.history.push("/fries");
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Add Fries</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Name of Restaurant</label>
                                        <input placeholder="Restaurant" name= "restaurant" className="form-control"
                                            value={this.state.restaurant} onChange={this.changeRestaurantHandler}/>
                                    </div>
                                    <div className = "form-group">
                                    <label>City</label>
                                    <input placeholder="City" name="city" className="form-control" 
                                            value={this.state.city} onChange={this.changeCityHandler}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>Rate dem fries 1-10</label>
                                    <input placeholder="Rating" name="rating" className="form-control" 
                                            value={this.state.rating} onChange={this.changeRatingHandler}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>Important Notes</label>
                                    <input placeholder="Notes" name="notes" className="form-control" 
                                            value={this.state.notes} onChange={this.changeNotesHandler}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>What typah Fries we talking:</label>
                                    <input placeholder="Type" name="type" className="form-control" 
                                            value={this.state.type} onChange={this.changeTypeHandler}/>
                                    </div>

                                    <button className="btn btn-success" onCLick={this.saveFries}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Abort Mission</button>
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
