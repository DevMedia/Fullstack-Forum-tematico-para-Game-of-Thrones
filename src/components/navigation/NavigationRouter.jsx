import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';
import Home from '../Home';
import PostThread from '../../containers/PostThread';
import CreatePost from '../../containers/CreatePost';
import NotFoundPage from './NotFoundPage';

const NavigationRouter = props => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col col-lg-6">
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/post/:postId" component={PostThread} />
                    <Route exact path="/create/post" component={CreatePost} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </div>
    </div>
);

NavigationRouter.propTypes = {};

export default NavigationRouter;
