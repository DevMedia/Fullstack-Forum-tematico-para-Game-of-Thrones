import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavigationRouter from '../components/navigation/NavigationRouter';
import Navbar from './Navbar';
import { authCheckUserIsLogged } from '../reduxModules/auth/actions';
import Footer from '../components/Footer';
import Main from '../components/Main';

export class AppContainer extends Component {
    componentDidMount() {
        this.props.authCheckUserIsLogged();
    }

    render() {
        return (
            <Main />
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = {
    authCheckUserIsLogged,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
