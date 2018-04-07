import React, { Component } from 'react';
import { login } from '../helpers/authManager';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class LoginForm extends Component {

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
        this.props.login(this.state).then(
            response => this.context.router.history.push('/')
        );
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


LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}
export default connect(null, { login } ) (LoginForm);