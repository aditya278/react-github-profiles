import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Importing the components
import Navbar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import Users from './components/Users';
import Alert from './components/Alert';
import Profile from './components/Profile';

//Import Context into App.js
import AlertState from './context/Alert/AlertState';
import GithubState from './context/GitHub/GithubState';

export default function App() {

    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div>
                        <Navbar title="GitHub Profile Search"/>
                        <div className="container">
                            <Alert />
                            <Switch>
                                <Route exact path="/react-github-profiles"
                                    render={() => (
                                        <>
                                            <Search />
                                            <Users />
                                        </>
                                    )}
                                />

                                <Route exact path="/react-github-profiles/about" >
                                    <About />
                                </Route>

                                <Route exact path="/react-github-profiles/user/:username" component={Profile} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    )
};