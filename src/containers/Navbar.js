import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavbarPresentation from '../components/navigation/Navbar';
import {
    authCheckUserIsLogged,
    authLogoff,
} from '../reduxModules/auth/actions';
import { navigationToggleSidebar } from '../reduxModules/navigation/actions';

export class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuIsOpen: false,
        };

        this.logoff = this.logoff.bind(this);
    }

    static propTypes = {
        auth: PropTypes.object,
        errorMessage: PropTypes.string,
        authCheckUserIsLogged: PropTypes.func,
        authLogoff: PropTypes.func,
        history: PropTypes.object,
        navigationToggleSidebar: PropTypes.func,
    };

    async logoff() {
        await this.props.authLogoff();
        this.props.history.push('/login');
    }

    render() {
        return (
            <NavbarPresentation
                userIsLogged={this.props.auth.userIsLogged}
                authLogoff={this.logoff}
                errorMessage={this.props.errorMessage}
                toggleSidebar={this.props.navigationToggleSidebar}
            />
        );
    }
}

const mapStateToProps = state => ({
    errorMessage: state.errorMessage,
    auth: state.auth,
});

const mapDispatchToProps = {
    authCheckUserIsLogged,
    authLogoff,
    navigationToggleSidebar,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
