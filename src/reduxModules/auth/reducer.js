import * as types from './types';

const initialState = {
    userData: {},
    userIslogged: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.AUTH_LOGIN:
            return { ...state, userData: payload };

        case types.AUTH_SIGNUP:
            return { ...state, userIslogged: payload };

        default:
            return state;
    }
};
