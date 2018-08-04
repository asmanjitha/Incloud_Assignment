import React, { Component } from 'react';
import './Home.css';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/timer"><button className="Timer-buttonHome"><a className="Button-textHome">Timer</a></button></Link>
                <Link to="/book"><button className="Book-buttonHome"><a className="Button-textHome">Book Time</a></button></Link>
                <Link to="/history"><button className="History-buttonHome"><a className="Button-textHome">View History</a></button></Link>
            </div>
        );
    }
}

export default Home;
