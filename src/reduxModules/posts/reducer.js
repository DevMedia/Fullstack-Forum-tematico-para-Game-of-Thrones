import * as types from './types';

const initialSate = {
    postList: [],
    postDetails: {},
};

export default (state = initialSate, { type, payload }) => {
    switch (type) {
    case types.POSTS_FETCH_ALL:
        return { ...state, postList: payload };

    case types.POSTS_FETCH_BY_AUTHOR:
        return { ...state, postList: payload };

    case types.POST_FETCH_NEXT_PAGE:
        return { ...state, postList: [...state.postList, ...payload] };

    case types.POSTS_FETCH_DETAILS:
        return { ...state, postDetails: payload };

    default:
        return state;
    }
};
