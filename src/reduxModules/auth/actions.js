import jwtDecode from 'jwt-decode';

import * as types from './types';
import {
    provideLoginUrl,
    provideSignUpUrl,
    provideLogoffUrl,
} from '../../helpers/urlProviders';
import {
    storeToken,
    retrieveToken,
    removeToken,
} from '../../helpers/tokenManager';

export const authLogin = (email, password) => async dispatch => {
    const url = provideLoginUrl();
    const body = JSON.stringify({ email, password });

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body,
    });

    if (response.status === 200) {
        const value = await response.json();
        const token = value.token;

        const userData = jwtDecode(token);
        storeToken(token);

        dispatch({
            type: types.AUTH_LOGIN,
            payload: {
                userData,
                userIsLogged: true,
            },
        });
    }
};

export const authLogoff = token => async dispatch => {
    const url = provideLogoffUrl();

    if (token) {
        fetch(url, { method: 'POST' });
    }

    removeToken();

    return dispatch({
        type: types.AUTH_LOGOFF,
        payload: {
            userIsLogged: false,
            userData: {}
        },
    });
};

export const authSignUp = (name, email, password) => async dispatch => {
    const url = provideSignUpUrl();
    const body = JSON.stringify({ name, email, password });

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body,
    });

    if (response.status === 201) {
        return authLogin(email, password)(dispatch);
    }

    // dispatch({
    //     type: types.AUTH_SIGNUP,
    //     payload: response.status === 201
    // });
};

export const authRetrieveUserData = () => async dispatch => {
    const token = retrieveToken();
    const payload = jwtDecode(token);

    return dispatch({
        type: types.AUTH_RETRIEVE_USER_DATA,
        payload,
    });
};

export const authCheckUserIsLogged = () => async dispatch => {
    const token = retrieveToken();
    const userData = token !== null ? jwtDecode(token) : {};
    return dispatch({
        type: types.AUTH_CHECK_USER_IS_LOGGED,
        payload: {
            userIsLogged: token !== null,
            userData,
        },
    });
};
