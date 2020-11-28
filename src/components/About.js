import React from 'react'

export default class About extends React.Component {
    constructor() {
        super();
        this.state = {
            fname : '',
            lname : '',
            password : '',
            gender : ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    
    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        return (
            <>
                <div>
                    <h1>About GitHub User Search</h1>
                    <p>This App is build using React Technology</p>
                    <p>Author: <a href="www.github.com/aditya278" target="_blank" rel="noopener">Aditya Shukla</a></p>
                </div>
                <p>This is just some form submission in React and Express</p>
                <div className="container" style={{margin:'10px 10px'}} >
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="fname">First Name: </label>
                        <input type="text" name="fname" value={this.state.fname} onChange={this.onChange}/>
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" name="lname" value={this.state.lname} onChange={this.onChange}/>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>

                        <input type="radio" id="male" name="gender" value="male" onChange={this.onChange}/>
                        <label htmlFor="male"> Male </label><br />
                        <input type="radio" id="female" name="gender" value="female" onChange={this.onChange}/>
                        <label htmlFor="female"> Female </label><br />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </>
        )
    }
}
