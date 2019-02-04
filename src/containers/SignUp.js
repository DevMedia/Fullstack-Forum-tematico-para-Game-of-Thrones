import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignUpForm from '../components/forms/SignUpForm';
import { authSignUp } from '../reduxModules/auth/actions';

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitSignUp = this.submitSignUp.bind(this);
    }

    static propTypes = {
        authSignUp: PropTypes.func,
        auth: PropTypes.object
    };

    handleChange(input) {
        return event => {
            this.setState({
                [input]: event.target.value,
            });
        };
    }

    submitSignUp(event) {
        event.preventDefault();
        this.props.authSignUp(
            this.state.name,
            this.state.email,
            this.state.password
        );
    }

    render() {
        const { name, email, password } = this.state;
        const { userIsLogged } = this.props.auth;

        if (userIsLogged) {
            return <Redirect to="/" />;
        }

        return (
            <SignUpForm 
                name={name}
                email={email}
                password={password}
                handleChange={this.handleChange}
                submitSignUp={this.submitSignUp}
            />
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    authSignUp
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
