import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuIsOpen: false,
        };

        this.toggleBurger = this.toggleBurger.bind(this);
        this.closeBurger = this.closeBurger.bind(this);
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

    render() {
        const { userIsLogged, authLogoff } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={this.closeBurger}>
                    <h3>DevMedia</h3>
                </Link>
                <button className="navbar-toggler" onClick={this.toggleBurger}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className={`collapse navbar-collapse ${this.state
                        .menuIsOpen && 'show'}`}
                    id="navbarNav">
                    <ul className="navbar-nav mr-auto text-left">
                        {userIsLogged || (
                            <li className="nav-item" onClick={this.closeBurger}>
                                <Link to="/signup" className="nav-link">
                                    Cadastre-se
                                </Link>
                            </li>
                        )}
                        {userIsLogged || (
                            <li className="nav-item" onClick={this.closeBurger}>
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        )}
                        {userIsLogged && (
                            <li
                                className="nav-item"
                                onClick={() => {
                                    this.closeBurger();
                                    authLogoff();
                                }}>
                                <Link to="/" className="nav-link">
                                    Logoff
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    userIsLogged: PropTypes.bool,
    authLogoff: PropTypes.func,
};

export default Navbar;
