import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Home from './Home';
import PostsList from './post/PostsList';
import PostsListPlaceholder from './post/PostsListPlaceholder';
import PostListHoC from '../containers/PostListHoC';

const MainPage = ({ userIsLogged }) => (
<div className="container">
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={PostListHoC} />
        </Switch>
    </BrowserRouter>
</div>
);



MainPage.propTypes = {};

export default MainPage;
