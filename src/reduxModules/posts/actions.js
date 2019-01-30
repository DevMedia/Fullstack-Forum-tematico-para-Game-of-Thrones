import * as types from './types';
import { 
    provideFetchAllPostsUrl, provideFetchPostsByAuthorUrl, provideFetchDetails
} from '../../helpers/urlProviders';

export const postsFetchAll = () => async dispatch => {
    const url = provideFetchAllPostsUrl();
    const response = await fetch(url);

    return dispatch({
        type: types.POSTS_FETCH_ALL,
        payload: response.status === 200 ? await response.json() : []
    });
}

export const postsFetchByAuthor = authorId => async dispatch => {
    const url = provideFetchPostsByAuthorUrl(authorId);
    const response = await fetch(url);

    return dispatch({
        type: types.POSTS_FETCH_BY_AUTHOR,
        payload: response.status === 200 ? await response.json() : []
    });
}

export const postsFetchDetails = postId => async dispatch => {
    const url = provideFetchDetails(postId);
    const response = await fetch(url);

    return dispatch({
        type: types.POSTS_FETCH_DETAILS,
        payload: response.status === 200 ? await response.json() : {}
    })

}