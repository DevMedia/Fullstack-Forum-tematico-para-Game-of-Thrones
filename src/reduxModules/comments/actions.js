import * as types from './types';
import { provideFetchCommentsByPost } from '../../helpers/urlProviders';

export const commentsFetchByPost = postId => async dispatch => {
    const url = provideFetchCommentsByPost(postId);
    const response = await fetch(url);

    return dispatch({
        type: types.COMMENTS_FETCH_BY_POST,
        payload: response.status === 200 ? await response.json() : [] 
    });
};

export const commentsFetchByAuthor = authorId => async dispatch => {
       
};