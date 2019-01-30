import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';
import Home from '../Home';
import Post from '../post/Post';
import PostThread from '../../containers/PostThread';

const NavigationRouter = props => (
    <div className="container">
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
            <Route exact path="/poste" render={props => <Post {...props} post={poste} />} />
            <Route path="/post/:postId" component={PostThread} />
        </Switch>
    </div>
);

const poste = {
    id: 'c6c98173-c105-46c6-92f5-4ba00ddebd62',
    title: 'a volta dos que não foram',
    body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    createdAt: '2019-01-29T16:19:57.000Z',
    updatedAt: '2019-01-29T16:19:57.000Z',
    authorId: '9a76158f-6332-4e0c-a4d5-8d79767a9215',
    author: {
        name: 'Aylan Boscarino',
        id: '9a76158f-6332-4e0c-a4d5-8d79767a9215',
    },
};

NavigationRouter.propTypes = {};

export default NavigationRouter;
