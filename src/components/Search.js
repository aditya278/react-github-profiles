import React, { useState, useContext } from 'react';

import GithubContext from "../context/GitHub/GithubContext";
import AlertContext from "../context/Alert/AlertContext";

function Search () {

    const githubContext = useContext(GithubContext);
    const { showAlert } = useContext(AlertContext);

    const [text, setText] = useState('');

    const onChange = (event) => {
        setText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(text !== '') {
            githubContext.searchUsers(text);
            setText("");
        }
        else {
            showAlert("Please Enter a Username to search!!", "danger");
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" value={text} onChange={onChange} placeholder="Search GitHub User.." />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
                {
                    githubContext.users.length > 0 && <button className="btn btn-dark btn-block" onClick={githubContext.clearUsers} >
                    Clear Search Results
                    </button>
                }
            </form>
        </div>
    )
}

export default Search;