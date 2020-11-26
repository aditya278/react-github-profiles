import React, { Component } from 'react'
import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Importing the components
import Navbar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import Users from './components/Users';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            users : [],
            loading : true
        }
    }

    async componentDidMount() {
        this.setState({ loading : true });
        const res = await axios.get('https://api.github.com/users');
        this.setState({ users : res.data,
                        loading : false });
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar title="GitHub Profile Search"/>
                    <div className="container">
                        
                        <Switch>
                            <Route exact path="/"
                                render={() => (
                                    <>
                                        <Search />
                                        <Users users={this.state.users} loading={this.state.loading} />
                                    </>
                                )}
                            />
                            <Route exact path="/about" >
                                <About />
                            </Route>
                        </Switch>

                    </div>
                </div>
            </Router>
        )
    }
}
