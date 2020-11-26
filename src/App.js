import React, { Component } from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Importing the components
import Navbar from './components/Navbar';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar title="GitHub Profile Search"/>
                </div>
            </Router>
        )
    }
}
