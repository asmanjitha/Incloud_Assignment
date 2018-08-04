import React, { Component } from 'react';
import './History.css';
import { Link} from "react-router-dom";
import Table from "./Table";

class History extends Component {
    constructor(props){
        super(props)
        this.state = {
            requestFailed: false
        }

    }
    render() {
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.data) return <p>Loading...</p>
        return (
            <div className="App">
                <h2>Previous Bookings</h2>
               <div className="Center-div" align="center">
                   <Table/>
               </div>
               <Link to="/home"><button className="ButtonHome"><a className="Button-textHome">Go To Home</a></button></Link>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost/timer_app/web/app_dev.php/getbookings')
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }

                return response
            })
            .then(d => d.json())
            .then(d => {
                this.setState({
                    data: d
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }



}
export default History;
