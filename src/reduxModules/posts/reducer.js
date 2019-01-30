import * as types from './types';

const initialSate = {
    postList: []
};

export default (state = initialSate, { type, payload }) => {
    switch (type) {
        case types.POSTS_FETCH_ALL:
            return { ...state, postList: payload };

        case types.POSTS_FETCH_BY_AUTHOR:
            return { ...state, postList: payload };

        default:
            return state;
    }
}