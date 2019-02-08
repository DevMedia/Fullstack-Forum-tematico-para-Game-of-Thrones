import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import logo from '../../assets/got-community.png';

export const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" onClick={props.closeBurger}>
            <img src={logo} alt="Home" className="brand"/>
        </Link>
        <button className="navbar-toggler" onClick={props.toggleBurger}>
            <span className="navbar-toggler-icon" />
        </button>
        <div
            className={`collapse navbar-collapse ${props.menuIsOpen && 'show'}`}
            id="navbarNav"
            onClick={props.closeBurger}
        >
            {props.userIsLogged || (
                <ul className="navbar-nav mr-auto text-left">
                    <li className="nav-item" onClick={props.closeBurger}>
                        <Link to="/signup" className="nav-link">
                            Cadastre-se
                        </Link>
                    </li>
                    <li className="nav-item" onClick={props.closeBurger}>
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
                        onClick={() => {
                            props.closeBurger();
                            props.authLogoff();
                        }}>
                        <Link to="" className="nav-link">
                            Logoff
                        </Link>
                    </li>
                </ul>
            )}
        </div>

        {props.errorMessage && (
            <div className="alert alert-danger col-lg-4" role="alert">
                {props.errorMessage}
            </div>
        )}
    </nav>
);

Navbar.propTypes = {
    userIsLogged: PropTypes.bool,
    menuIsOpen: PropTypes.bool,
    authLogoff: PropTypes.func,
    toggleBurger: PropTypes.func,
    closeBurger: PropTypes.func,
    errorMessage: PropTypes.string,
};

export default Navbar;
