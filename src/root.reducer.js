import { combineReducers } from 'redux';

import authReducer from './reduxModules/auth/reducer';
import postReducer from './reduxModules/posts/reducer';
import commentReducer from './reduxModules/comments/reducer';
import exceptionReducer from './reduxModules/exceptions/reducer';
import navigationReducer from './reduxModules/navigation/reducer';

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    comments: commentReducer,
    errorMessage: exceptionReducer,
    navigation: navigationReducer,
});
