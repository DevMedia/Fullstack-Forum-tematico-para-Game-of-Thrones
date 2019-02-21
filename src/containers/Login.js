import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../components/forms/LoginForm';
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
        authLogin: PropTypes.func,
        userIsLogged: PropTypes.bool,
    };

    handleChange(input) {
        return event => {
            this.setState({
                [input]: event.target.value,
            });
        };
    }

    submitLogin(event) {
        event.preventDefault();
        this.props.authLogin(this.state.email, this.state.password);
    }

    render() {
        const { email, password } = this.state;
        const { userIsLogged } = this.props;

        return (
            <LoginForm
                userIsLogged={userIsLogged}
                email={email}
                password={password}
                handleChange={this.handleChange}
                submitLogin={this.submitLogin}
            />
        );
    }
}

const mapStateToProps = state => ({
    userIsLogged: state.auth.userIsLogged,
});

const mapDispatchToProps = {
    authLogin,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
