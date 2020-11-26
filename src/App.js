import React, { Component } from 'react'
import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Importing the components
import Navbar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import Users from './components/Users';
import Alert from './components/Alert';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            users : [],
            loading : true,
            alert : null
        }
    }

    onUserSearch = async (text) => {
        this.setState({loading : true});
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        this.setState({
            users : res.data.items,
            loading : false
        });
    }

    onClearSearch = () => {
        this.setState({users : []});
    }

    setAlert = (msg, type) => {
        this.setState({alert : {msg, type}});
        setTimeout(() => {
            this.setState({alert : null});
        }, 2000);
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
                        <Alert alert={this.state.alert} />
                        <Switch>
                            <Route exact path="/"
                                render={() => (
                                    <>
                                        <Search onUserSearch={this.onUserSearch} onClearSearch={this.onClearSearch} showClearBtn={this.state.users.length > 0 ? true : false} setAlert={this.setAlert} />
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
