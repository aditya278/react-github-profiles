import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Importing the components
import Navbar from './components/Navbar';
import About from './components/About';
import Search from './components/Search';
import Users from './components/Users';
import Alert from './components/Alert';
import Profile from './components/Profile';

export default function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(null);
    const [userProfile, setUserProfile] = useState([]);
    const [userRepos, setUserRepos] = useState([]);

    const onUserSearch = async (text) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        setUsers(res.data.items);
        setLoading(false);
    }

    const onClearSearch = () => {
        setUsers([]);
    }

    const setAlertMessage = (msg, type) => {
        setAlert({msg, type});
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const getUserProfile = async (username) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${username}`);
        setUserProfile(res.data);
        setLoading(false);
    }

    const getUserRepos = async(username) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc`);
        setUserRepos(res.data);
        setLoading(false);
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await axios.get('https://api.github.com/users');
            setUsers(res.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <Router>
            <div>
                <Navbar title="GitHub Profile Search"/>
                <div className="container">
                    <Alert alert={alert} />
                    <Switch>
                        <Route exact path="/"
                            render={() => (
                                <>
                                    <Search onUserSearch={onUserSearch} onClearSearch={onClearSearch} showClearBtn={users.length > 0 ? true : false} setAlert={setAlertMessage} />
                                    <Users users={users} loading={loading} />
                                </>
                            )}
                        />

                        <Route exact path="/about" >
                            <About />
                        </Route>

                        <Route exact path="/user/:username"
                            render={(props) => (
                                <Profile  {...props}
                                        userProfile={userProfile}
                                        getUserProfile={getUserProfile}
                                        loading={loading}
                                        userRepos={userRepos}
                                        getUserRepos={getUserRepos}
                                />
                            )}
                        />
                    </Switch>

                </div>
            </div>
        </Router>
    )
};