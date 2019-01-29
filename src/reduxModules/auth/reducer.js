import * as types from './types';

const initialState = {
    user: {},
    userIslogged: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.AUTH_LOGIN:
            return { ...state, user: payload };

        case types.AUTH_SIGNUP:
            return { ...state, userIslogged: payload };

        default:
            return state;
    }
};
