import { combineReducers } from 'redux';

import  authReducer from './reduxModules/auth/reducer';
import postReducer from './reduxModules/posts/reducer';
import commentReducer from './reduxModules/comments/reducer';

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    comments: commentReducer
});