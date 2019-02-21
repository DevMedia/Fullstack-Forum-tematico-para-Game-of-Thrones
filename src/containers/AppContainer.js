import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { authCheckUserIsLogged } from '../reduxModules/auth/actions';
import Main from '../components/Main';

export class AppContainer extends Component {
    static propTypes = {
        authCheckUserIsLogged: PropTypes.func,
    };

    componentDidMount() {
        this.props.authCheckUserIsLogged();
    }

    render() {
        return <Main />;
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
