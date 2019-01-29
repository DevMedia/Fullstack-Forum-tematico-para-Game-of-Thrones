import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignUpForm from '../components/SignUpForm';
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
        prop: PropTypes,
    };

    handleChange(name) {
        return event => {
            this.setState({
                [name]: event.target.value,
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
    userIsLogged: state.auth.userIslogged
});

const mapDispatchToProps = {
    authSignUp
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
