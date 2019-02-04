import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';
import Home from '../Home';
import Comment from '../comments/Comment';
import PostThread from '../../containers/PostThread';
import PostForm from '../forms/PostForm';
import CreatePost from '../../containers/CreatePost';
import CreateComment from '../../containers/CreateComment';


const NavigationRouter = props => (
    <div className="container">
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:postId" component={PostThread} />
            <Route exact path="/create/post" component={CreatePost} />
        </Switch>
    </div>
);

NavigationRouter.propTypes = {};

export default NavigationRouter;
