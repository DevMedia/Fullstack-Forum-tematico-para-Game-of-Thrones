import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';
import Home from '../Home';

const MainPage = ({ userIsLogged }) => (
<div className="container">
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
    </Switch>
</div>
);



MainPage.propTypes = {};

export default MainPage;
