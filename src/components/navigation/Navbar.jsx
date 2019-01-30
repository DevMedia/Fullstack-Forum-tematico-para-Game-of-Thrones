import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
      super(props)
    
        this.state = {
            menuIsOpen: false
        };

        this.toggleBurger = this.toggleBurger.bind(this);
        this.closeBurger = this.closeBurger.bind(this);
    }

    toggleBurger() {
        this.setState(state => ({
            menuIsOpen: !state.menuIsOpen
        }));
    }

    closeBurger() {
        this.setState({
            menuIsOpen: false
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"  className="navbar-brand" onClick={this.closeBurger}><h3>DevMedia</h3></Link>
                <button className="navbar-toggler" onClick={this.toggleBurger}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className= {`collapse navbar-collapse ${this.state.menuIsOpen && 'show'}`} id="navbarNav">
                    <ul className="navbar-nav mr-auto text-left">
                        <li className="nav-item" onClick={this.closeBurger}>
                            <Link to="/signup" className="nav-link">
                                Cadastre-se
                            </Link>
                        </li>
                        <li className="nav-item" onClick={this.closeBurger}>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
        );
    }
}

Navbar.propTypes = {};

export default Navbar;
