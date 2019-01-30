import { combineReducers } from 'redux';

import  authReducer from './reduxModules/auth/reducer';
import postReducer from './reduxModules/posts/reducer';

export default combineReducers({
    auth: authReducer,
    posts: postReducer
});