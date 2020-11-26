import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {

    constructor() {
        super();
        this.state = {
            text : ""
        }
    }

    render() {
        return (
            <div>
                <form className="form" >
                    <input type="text" name="text" value={this.state.text} placeholder="Search GitHub User.." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}
