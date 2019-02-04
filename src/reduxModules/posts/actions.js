import * as types from './types';
import {
    provideFetchAllPostsUrl,
    provideFetchPostsByAuthorUrl,
    provideFetchDetails,
    provideCreatePostUrl,
} from '../../helpers/urlProviders';
import { retrieveToken } from '../../helpers/tokenManager';
import { authLogoff } from '../auth/actions';

export const postsFetchAll = () => async dispatch => {
    const url = provideFetchAllPostsUrl();
    const response = await fetch(url);

    return dispatch({
        type: types.POSTS_FETCH_ALL,
        payload: response.status === 200 ? await response.json() : [],
    });
};

export const postsFetchByAuthor = authorId => async dispatch => {
    const url = provideFetchPostsByAuthorUrl(authorId);
    const response = await fetch(url);

    return dispatch({
        type: types.POSTS_FETCH_BY_AUTHOR,
        payload: response.status === 200 ? await response.json() : [],
    });
};

export const postsFetchDetails = postId => async dispatch => {
    const url = provideFetchDetails(postId);
    const response = await fetch(url);

    return dispatch({
        type: types.POSTS_FETCH_DETAILS,
        payload: response.status === 200 ? await response.json() : {},
    });
};

export const postsCreatePost = (title, postBody) => async dispatch => {
    const url = provideCreatePostUrl();
    const token = retrieveToken();
    const requestBody = JSON.stringify({
        title,
        body: postBody,
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
        return postsFetchAll()(dispatch);
    } catch (error) {
        console.log({error})
    }
    
};
