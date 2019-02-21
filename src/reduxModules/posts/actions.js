import * as types from './types';
import {
    provideFetchAllPostsUrl,
    provideFetchPostsByAuthorUrl,
    provideFetchDetails,
    provideCreatePostUrl,
} from '../../helpers/urlProviders';
import { retrieveToken } from '../../helpers/tokenManager';
import { authLogoff } from '../auth/actions';
import {
    exceptionsFetchRejection,
    exceptionsHandleFetchErrors,
} from '../exceptions/actions';

export const postsFetchAll = () => async dispatch => {
    try {
        const url = provideFetchAllPostsUrl();
        const response = await fetch(url);

        if (response.status !== 200) {
            return exceptionsFetchRejection(response)(dispatch);
        }

        return dispatch({
            type: types.POSTS_FETCH_ALL,
            payload: response.status === 200 ? await response.json() : [],
        });
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
};

export const postsFetchNextPage = page => async dispatch => {
    try {
        const url = provideFetchAllPostsUrl(page);
        const response = await fetch(url);

        if (response.status !== 200) {
            return exceptionsFetchRejection(response)(dispatch);
        }

        return dispatch({
            type: types.POST_FETCH_NEXT_PAGE,
            payload: response.status === 200 ? await response.json() : [],
        });
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
};

export const postsFetchByAuthor = authorId => async dispatch => {
    try {
        const url = provideFetchPostsByAuthorUrl(authorId);
        const response = await fetch(url);

        if (response.status !== 200) {
            return exceptionsFetchRejection(response)(dispatch);
        }

        return dispatch({
            type: types.POSTS_FETCH_BY_AUTHOR,
            payload: response.status === 200 ? await response.json() : [],
        });
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
};

export const postsFetchDetails = postId => async dispatch => {
    try {
        const url = provideFetchDetails(postId);
        const response = await fetch(url);

        if (response.status !== 200) {
            return exceptionsFetchRejection(response)(dispatch);
        }

        return dispatch({
            type: types.POSTS_FETCH_DETAILS,
            payload: response.status === 200 ? await response.json() : {},
        });
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
};

export const postsCreatePost = (title, postBody) => async dispatch => {
    try {
        const url = provideCreatePostUrl();
        const token = retrieveToken();
        const requestBody = JSON.stringify({
            title,
            body: postBody,
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

        return postsFetchAll()(dispatch);
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
};
