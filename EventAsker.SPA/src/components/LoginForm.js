import React, { Component } from 'react';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value});
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const inputs = this.state.username + ' ' + this.state.password;
        console.log(inputs)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
                    </label>
                </div>
                <div>
                    <label>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                    </label>
                </div>
                <input type="submit" value="Login"/>
                </form>
            </div>
            
        );
    }

}