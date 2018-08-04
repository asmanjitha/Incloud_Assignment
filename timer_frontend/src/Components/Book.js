import React, { Component } from 'react';
import './Book.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';
import { Link} from "react-router-dom";

class Book extends Component {
    constructor(props){
        super(props);
        this.validateInput = this.validateInput.bind(this);
        this.bookTime = this.bookTime.bind(this)
    }
    render() {
        return (
            <div className="App">
                <h2 className="Head-textBook">Book a Time</h2>
                <div>
                    <h4>Description</h4>
                    <input type="text"  className="Input-text" placeholder="Click here to enter the description" id="description"/>
                    <h4>End Date</h4>
                    <input type="date"  className="Input-text" id="date"/>
                    <h4>End Time</h4>
                    <input type="time"  className="Input-text" id="time"/>
                    <ButtonToolbar>
                        <Button className="Book-buttonBook" onClick={this.validateInput}><a className="Button-text">Record Booking</a></Button>
                    </ButtonToolbar>
                </div>
                <br/>
                <Link to="/home"><button className="ButtonHome"><a className="Button-textHome">Go To Home</a></button></Link>
            </div>
        );
    }
    validateInput(){
        if(!(document.getElementById("description").value)){
            alert("description is empty");
        }else if(!(document.getElementById("date").value)){
            alert("date is empty");
        }else if(!(document.getElementById("time").value)){
            alert("Time is empty");
        }else{
            this.bookTime();
        }
    }
    bookTime(){
        axios.post('http://localhost/timer_app/web/app_dev.php/savebooking', {
            date: document.getElementById("date").value,
            time: document.getElementById("time").value,
            description: document.getElementById("description").value
        })
            .then(function (response) {
                if (response){
                    alert("data saved !!!")
                }else{
                    alert("Data not saved !!!")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
export default Book;
