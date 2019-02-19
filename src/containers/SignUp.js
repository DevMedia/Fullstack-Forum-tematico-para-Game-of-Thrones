import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import emailValidator from 'email-validator';
import PasswordValidator from 'password-validator';

import SignUpForm from '../components/forms/SignUpForm';
import { authSignUp } from '../reduxModules/auth/actions';
import {
    exceptionInvalidName,
    exceptionInvalidEmail,
    exceptionInvalidPassword,
} from '../reduxModules/exceptions/actions';

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            // buttonDisabled: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitSignUp = this.submitSignUp.bind(this);
    }

    static propTypes = {
        authSignUp: PropTypes.func,
        auth: PropTypes.object,
        exceptionInvalidName: PropTypes.func,
        exceptionInvalidEmail: PropTypes.func,
        exceptionInvalidPassword: PropTypes.func,
    };

    handleChange(input) {
        return event => {
            this.setState({
                [input]: event.target.value,
            });
        };
    }

    validatePassword(password) {
        const passwordValidator = new PasswordValidator();

        passwordValidator
            .is()
            .min(4)
            .has()
            .not()
            .spaces();

        if (passwordValidator.validate(password)) {
            return true;
        }
        this.props.exceptionInvalidPassword();
        return false;
    }

    validateEmail(email) {
        if (emailValidator.validate(email)) {
            return true;
        }
        this.props.exceptionInvalidEmail();
        return false;
    }

    validateName(name) {
        if (name.length > 0 && typeof name === 'string') {
            return true;
        }
        this.props.exceptionInvalidName();
        return false;
    }

    submitSignUp(event) {
        event.preventDefault();
        const { name, email, password } = this.state;

        if (
            this.validateName(name) &&
            this.validateEmail(email) &&
            this.validatePassword(password)
        ) {
            this.setState({ buttonDisabled: true });
            this.props.authSignUp(name, email, password);
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log({prevProps: prevProps.errorMessage})
    //     console.log({props: this.props.errorMessage})
    //     const { errorMessage } = this.props;
    //     if (errorMessage !== prevProps.errorMessage)
    //         this.setState({ buttonDisabled: true });
    // }

    render() {
        const { name, email, password, buttonDisabled } = this.state;
        const { userIsLogged } = this.props.auth;

        return (
            <div>
                {userIsLogged && <Redirect to="/" />}
                <SignUpForm
                    name={name}
                    email={email}
                    password={password}
                    buttonDisabled={buttonDisabled}
                    handleChange={this.handleChange}
                    submitSignUp={this.submitSignUp}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errorMessage: state.errorMessage
});

const mapDispatchToProps = {
    authSignUp,
    exceptionInvalidName,
    exceptionInvalidEmail,
    exceptionInvalidPassword,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
