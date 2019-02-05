import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavbarPresentation from '../components/navigation/Navbar';
import { authCheckUserIsLogged, authLogoff } from '../reduxModules/auth/actions';

export class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuIsOpen: false,
        };

        this.toggleBurger = this.toggleBurger.bind(this);
        this.closeBurger = this.closeBurger.bind(this);
        this.logoff = this.logoff.bind(this);
    }

    toggleBurger() {
        this.setState(state => ({
            menuIsOpen: !state.menuIsOpen,
        }));
    }

    closeBurger() {
        this.setState({
            menuIsOpen: false,
        });
    }

    async logoff() {
        await this.props.authLogoff();
        this.props.history.push('/login');
    }
    
    static propTypes = {
        auth: PropTypes.object,
        errorMessage: PropTypes.string,
        authCheckUserIsLogged: PropTypes.func,
        authLogoff: PropTypes.func
    };

    render() {
        return (
            <NavbarPresentation 
                userIsLogged={this.props.auth.userIsLogged}
                menuIsOpen={this.state.menuIsOpen}
                authLogoff={this.logoff}
                toggleBurger={this.toggleBurger}
                closeBurger={this.closeBurger}
                errorMessage={this.props.errorMessage}
            />
        );
    }
}

const mapStateToProps = state => ({
    errorMessage: state.errorMessage,
    auth: state.auth
});

const mapDispatchToProps = {
    authCheckUserIsLogged,
    authLogoff
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
