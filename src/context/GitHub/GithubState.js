import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";

import GithubReducer from "./GithubReducer";

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    SET_REPOS,
    SET_ALL_USERS
  } from "../types"; //Actions (Action Types)

const GithubState = (props) => {
    const initialState = {
        users : [],
        user : {},
        repos : [],
        loading : false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const setLoading = () => dispatch({ type: SET_LOADING });
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    const searchUsers = async text => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}`
        );
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    };

    const setAllUsers = async () => {
        setLoading();
        const res = await axios.get("https://api.github.com/users");
        dispatch({
          type : SET_ALL_USERS,
          payload : res.data
        });
    }

    const getUser = async username => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}`);
        dispatch({ type: GET_USER, payload: res.data });
    };

    const getUserRepos = async username => {
        setLoading();
        const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
        );
        dispatch({ type: SET_REPOS, payload: res.data });
    };

    return (
        <GithubContext.Provider
            value={{
                users : state.users,
                user : state.user,
                repos : state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos,
                setAllUsers
            }}
        >
            { props.children }
        </GithubContext.Provider>
    )
}

export default GithubState;