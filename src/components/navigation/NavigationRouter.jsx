import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';
import Home from '../Home';
import Comment from '../comments/Comment';
import PostThread from '../../containers/PostThread';

const NavigationRouter = props => (
    <div className="container">
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
            <Route
                exact
                path="/comente"
                render={props => <Comment {...props} comment={comente} />}
            />
            <Route path="/post/:postId" component={PostThread} />
        </Switch>
    </div>
);

const comente = {
    id: '75efb7ec-3a05-46cf-9b68-08a6ec978714',
    body: 'ESSE POSTE É UMA BELEZA',
    createdAt: '2019-01-29T16:22:11.000Z',
    updatedAt: '2019-01-29T16:22:11.000Z',
    authorId: '9a76158f-6332-4e0c-a4d5-8d79767a9215',
    postId: 'c6c98173-c105-46c6-92f5-4ba00ddebd62',
    author: {
        name: 'Aylan Boscarino',
    },
};

NavigationRouter.propTypes = {};

export default NavigationRouter;
