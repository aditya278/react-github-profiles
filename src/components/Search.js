import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Search extends Component {

    constructor() {
        super();
        this.state = {
            text : ""
        }
    }

    static propTypes = {
        onUserSearch : PropTypes.func.isRequired,
        onClearSearch : PropTypes.func.isRequired,
        showClearBtn : PropTypes.bool.isRequired
    }

    onChange = (event) => {
        this.setState({text : event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onUserSearch(this.state.text);
        this.setState({text : ""});
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="Search GitHub User.." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                    {
                        this.props.showClearBtn && <button className="btn btn-dark btn-block" onClick={this.props.onClearSearch} >
                        Clear Search Results
                        </button>
                    }
                </form>
            </div>
        )
    }
}
