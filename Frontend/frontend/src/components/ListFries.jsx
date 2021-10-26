import React, { Component } from 'react';
import FriesService from '../services/FriesService';

class ListFries extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // need to create an array stored in the state; used in the <tbody> to map over inputs:
            fries: []
        }
        // when clicking the button to add Fries it brings you to this method; bind():
        this.addFries = this.addFries.bind(this);
        this.editFries = this.editFries.bind(this);
        this.deleteFries = this.deleteFries.bind(this);
    }

    // componentdidmount method called immediately after component is mounted; calls upon getFries() from FriesService.js: 
    componentDidMount() {
        FriesService.getFries().then((res) => {
            // store response data in the state array: 
            this.setState({ fries: res.data });
        });
    }

    // method after clicking button to addFries() which redirects to route /add-fries with history method: 
    addFries() {
        this.props.history.push("/add-fries/_add");
    }

    // update button with id: 
    editFries(id) {
        this.props.history.push(`/add-fries/${id}`);
    }

    // delete button with id: 
    deleteFries(id) {
        // make a res API call: 
        FriesService.deleteFries(id).then(res => {
            this.setState({ fries: this.state.fries.filter(fries => fries.id !== id) })
        })
    }

    // view button with id: 
    viewFries(id) {
        this.props.history.push(`/view-fries/${id}`)
    }

    render() {
        return (
            <div>
                <h2>Best Fries in Town</h2>
                <div>
                    <button onClick={this.addFries}>Add Fries</button>
                </div>
                <div>
                    {/* each table needs a thead, tbody, and tfoot */}
                    <table>
                        {/* 1. thead: */}
                        <thead>
                            {/* tr tag defines a row: */}
                            <tr>
                                {/* th tag defines header cell (td would then definite data cell) ): */}
                                <th>Restaurant Name</th>
                                <th>City</th>
                                <th className="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></th>
                                <th>Notes</th>
                                <th>Type</th>
                                {/* <th>Actions</th> */}
                            </tr>
                        </thead>
                        {/* 2. tbody: */}
                        <tbody>
                            {
                                this.state.fries.map(
                                    fries =>
                                        // give each row a unique key:
                                        <tr key={fries.id}>
                                            <td>{fries.restaurant}</td>
                                            <td>{fries.city}</td>
                                            <td>{fries.rating}</td>
                                            <td>{fries.notes}</td>
                                            <td>{fries.type}</td>
                                            <td>
                                                <button onClick={() => this.editFries(fries.id)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteFries(fries.id)} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewFries(fries.id)} className="btn btn-info">View</button>
                                            </td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListFries;