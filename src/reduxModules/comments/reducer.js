import * as types from './types';

const initialState = {
    commentsList: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case types.COMMENTS_FETCH_BY_POST:
        return { ...state, commentsList: payload };

    default:
        return state;
    }
};
