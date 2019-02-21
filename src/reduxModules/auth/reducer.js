import * as types from './types';

const initialState = {
    userData: {},
    userIsLogged: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case types.AUTH_LOGIN:
        return { ...state, ...payload };

    case types.AUTH_SIGNUP:
        return { ...state, userIsLogged: payload };

    case types.AUTH_LOGOFF:
        return { ...payload };

    case types.AUTH_RETRIEVE_USER_DATA:
        return { ...state, userData: payload };

    case types.AUTH_CHECK_USER_IS_LOGGED:
        return { ...state, ...payload };
    default:
        return state;
    }
};
