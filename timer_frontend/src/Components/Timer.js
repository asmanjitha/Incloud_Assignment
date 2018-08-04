import React, { Component } from 'react';
import './Timer.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import axios from 'axios';
import { Link} from "react-router-dom";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {showStart:true,showPause:false,showReset:false,showStop:false,seconds:0,minutes:0,hours:0,count:0,showBooking:false,booking:false};
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.showBooking = this.showBooking.bind(this);
        this.bookTime = this.bookTime.bind(this);
    }
    render() {
        return (
            <div>
                <p className="Timer-clock">{("0" + Math.floor(this.state.count/3600)).slice(-2)+":"+("0" + Math.floor(this.state.count/60)).slice(-2)+":"+("0" + this.state.count%60).slice(-2)}</p>
                <ButtonToolbar>
                    { this.state.showStart ? <Button className="Start-button" onClick={this.startTimer}><a className="Button-text" >Start</a></Button> : null }
                    { this.state.showPause ? <Button className="Pause-button" onClick={this.pauseTimer}><a className="Button-text">Pause</a></Button> : null }
                    { this.state.showStop ? <Button className="Stop-button" onClick={this.stopTimer}><a className="Button-text">Stop</a></Button> : null }
                    { this.state.showReset ? <Button className="Reset-button" onClick={this.resetTimer}><a className="Button-text">Reset</a></Button> : null }
                </ButtonToolbar>
                <br/>
                {this.state.booking ? null :<a onClick={this.showBooking}><h4 className="Header-text">Click Here to Book Time</h4></a>}
                { this.state.showBooking? <div>
                    <h4>Description</h4>
                    <input type="text"  className="Input-text" placeholder="Click here to enter the description" id="description"/>
                    <br/>
                    <br/>
                    <ButtonToolbar>
                        <Button className="Book-button" onClick={this.bookTime}><a className="Button-text">Book Time</a></Button>
                    </ButtonToolbar>
                </div>:null}
                <Link to="/home"><button className="ButtonHome"><a className="Button-textHome">Go To Home</a></button></Link>
            </div>
        );
    }

    startTimer(){
        this.setState({running:true});
        this.setState({showStart:false});
        this.setState({showPause:true});
        this.setState({showStop:true});
        this.setState({count:this.state.count+1});
        this.interval = setInterval(this.updateCount.bind(this),1000);
    }
    pauseTimer(){
        this.setState({showPause:false});
        this.setState({showStart:true});
        this.setState({showStop:true});
        this.setState({running:false});
        clearInterval(this.interval);
    }
    resetTimer(){
        this.setState({showReset:false});
        this.setState({showStart:true});
        this.setState({count:0});
    }
    stopTimer(){
        this.setState({showPause:false});
        this.setState({showStart:false});
        this.setState({showReset:true});
        this.setState({showStop:false});
        this.setState({running:false});
        clearInterval(this.interval);
        if(this.state.booking){
            let d = new Date();
            let date = d.getFullYear()+"-" + ("0" + Math.floor(d.getMonth())).slice(-2) + "-"+ ("0" + Math.floor(d.getDate())).slice(-2);
            let time = ("0" + Math.floor(d.getHours())).slice(-2)+ ":" + ("0" + Math.floor(d.getMinutes())).slice(-2);
            axios.post('http://localhost/timer_app/web/app_dev.php/savebooking', {
                date: date,
                time: time,
                description: this.state.description
            })
                .then(function (response) {
                    if (response){
                        alert("Booking saved !!!")
                    }else{
                        alert("Booking not saved !!!")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    updateCount(){
        this.setState({count:this.state.count + 1});
    }
    showBooking(){
        this.setState({showBooking:true});
    }
    bookTime(){
        alert("booking...");
        this.setState({showBooking:false});
        this.setState({booking:true});
        this.setState({count:0});
        this.setState({description:document.getElementById("description").value});
    }
}


export default Timer;
