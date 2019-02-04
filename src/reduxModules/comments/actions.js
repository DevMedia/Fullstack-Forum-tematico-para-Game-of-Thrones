import * as types from './types';
import { provideFetchCommentsByPost, provideCreateCommentUrl } from '../../helpers/urlProviders';
import { retrieveToken } from '../../helpers/tokenManager';
import { authLogoff } from '../auth/actions';

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

export const commentsCreateComment = (postId, authorId, commentBody) => async dispatch => {
    const url = provideCreateCommentUrl(postId);
    const token = retrieveToken();
    const requestBody = JSON.stringify({
        body: commentBody
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: requestBody,
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }),
        });
        if (response.status === 401) {
            return await authLogoff(token)(dispatch);
        }

        return commentsFetchByPost(postId)(dispatch);

    } catch (error) {
        console.error(error);
    }
};
