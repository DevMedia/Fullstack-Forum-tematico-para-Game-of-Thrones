import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { authLogin } from '../reduxModules/auth/actions';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    static propTypes = {
        // prop: PropTypes,
    };

    handleChange(name) {
        return event => {
            this.setState({
                [name]: event.target.value,
            });
        };
    }

    submitLogin(event) {
        event.preventDefault();
        this.props.authLogin(this.state.email, this.state.password);
    }

    render() {
        const { email, password } = this.state;
        return (
            <LoginForm
                email={email}
                password={password}
                handleChange={this.handleChange}
                submitLogin={this.submitLogin}
            />
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
});

const mapDispatchToProps = {
    authLogin,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
