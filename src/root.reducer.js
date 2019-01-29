import { combineReducers } from 'redux';

import  authReducer from './reduxModules/auth/reducer';

export default combineReducers({
    auth: authReducer
});