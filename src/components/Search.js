import React, { useState } from 'react'
import PropTypes from 'prop-types';

function Search ({onUserSearch, setAlertMessage, onClearSearch, showClearBtn}) {

    const [text, setText] = useState('');

    const onChange = (event) => {
        setText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(text !== '') {
            onUserSearch(text);
            setText("");
        }
        else {
            setAlertMessage("Please Enter a Username to search!!", "danger");
        }
    
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" value={text} onChange={onChange} placeholder="Search GitHub User.." />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
                {
                    showClearBtn && <button className="btn btn-dark btn-block" onClick={onClearSearch} >
                    Clear Search Results
                    </button>
                }
            </form>
        </div>
    )
}

Search.propTypes = {
    onUserSearch : PropTypes.func.isRequired,
    onClearSearch : PropTypes.func.isRequired,
    showClearBtn : PropTypes.bool.isRequired
}

export default Search;