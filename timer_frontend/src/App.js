import React, { Component } from 'react';
import './App.css';
import Timer from "./Components/Timer";
import Home from "./Components/Home";
import Book from "./Components/Book";
import {BrowserRouter as Router,  Route, BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import History from "./Components/History";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Router history={BrowserRouter}>
              <div>
                  <Route exact path="/" component={Home}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/timer" component={Timer}/>
                  <Route path="/book" component={Book}/>
                  <Route path="/history" component={History}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
