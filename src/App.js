import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import NavigationRouter from './components/navigation/NavigationRouter';
import Navbar from './components/navigation/Navbar';
import { authCheckUserIsLogged } from './reduxModules/auth/actions';
import AppContainer from './containers/AppContainer';

class App extends Component {
    render() {
        return <AppContainer />;
    }
}


 
export default App;
