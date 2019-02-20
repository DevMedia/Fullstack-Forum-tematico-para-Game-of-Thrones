import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import logo from '../../assets/got-community.png';

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="row">
            <Link to="/" className="navbar-brand" onClick={props.closeBurger}>
                <img src={logo} alt="Home" className="brand" />
            </Link>
            <button className="navbar-toggler" onClick={props.toggleSidebar}>
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarNav">
                {props.userIsLogged || (
                    <ul className="navbar-nav mr-auto text-left">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">
                                Cadastre-se
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                    </ul>
                )}
                {props.userIsLogged && (
                    <ul className="navbar-nav mr-auto text-left">
                        <li className="nav-item">
                            <Link to="/create/post" className="nav-link">
                                Novo Post
                            </Link>
                        </li>
                        <li
                            className="nav-item"
                            onClick={props.authLogoff}>
                            <Link to="" className="nav-link">
                                Logoff
                            </Link>
                        </li>
                    </ul>
                )}
            </div>

            {props.errorMessage && (
                <div
                    className="alert alert-danger col-12 col-lg-12 mt-2"
                    role="alert">
                    {props.errorMessage}
                </div>
            )}
        </div>
    </nav>
);

Navbar.propTypes = {
    userIsLogged: PropTypes.bool,
    authLogoff: PropTypes.func,
    errorMessage: PropTypes.string,
    toggleSidebar: PropTypes.func,
};

export default Navbar;
