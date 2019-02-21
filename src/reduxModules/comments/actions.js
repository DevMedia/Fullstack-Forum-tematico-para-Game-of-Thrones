import * as types from './types';
import {
    provideFetchCommentsByPost,
    provideCreateCommentUrl,
} from '../../helpers/urlProviders';
import { retrieveToken } from '../../helpers/tokenManager';
import { authLogoff } from '../auth/actions';
import {
    exceptionsFetchRejection,
    exceptionsHandleFetchErrors,
} from '../exceptions/actions';

export const commentsFetchByPost = postId => async dispatch => {
    try {
        const url = provideFetchCommentsByPost(postId);
        const response = await fetch(url);

        if (response.status !== 200) {
            return exceptionsFetchRejection(200)(dispatch);
        }

        return dispatch({
            type: types.COMMENTS_FETCH_BY_POST,
            payload: response.status === 200 ? await response.json() : [],
        });
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
};

export const commentsCreateComment = (
    postId,
    authorId,
    commentBody
) => async dispatch => {
    try {
        const url = provideCreateCommentUrl(postId);
        const token = retrieveToken();
        const requestBody = JSON.stringify({
            body: commentBody,
        });

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

        if (response.status !== 201) {
            return exceptionsFetchRejection(response)(dispatch);
        }

        return commentsFetchByPost(postId)(dispatch);
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
};
