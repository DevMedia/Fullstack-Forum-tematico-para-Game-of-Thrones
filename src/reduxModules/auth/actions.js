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
import {
    exceptionsAuthLoginRejected,
    exceptionsHandleFetchErrors,
    exceptionsFetchRejection,
} from '../exceptions/actions';

export const authLogin = (email, password) => async dispatch => {
    try {
        const url = provideLoginUrl();
        const body = JSON.stringify({ email, password });

        const response = await fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body,
        });

        if (response.status !== 200) {
            return exceptionsAuthLoginRejected(response)(dispatch);
        }

        if (response.status === 200) {
            const value = await response.json();
            const token = value.token;

            const userData = jwtDecode(token);
            storeToken(token);

            return dispatch({
                type: types.AUTH_LOGIN,
                payload: {
                    userData,
                    userIsLogged: true,
                },
            });
        }
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
};

export const authLogoff = () => async dispatch => {
    try {
        const token = retrieveToken();
        const url = provideLogoffUrl();

        removeToken();

        const response = await fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }),
        });

        if (response.status !== 200 && response.status !== 401) {
            return exceptionsFetchRejection(response)(dispatch);
        }

        return dispatch({
            type: types.AUTH_LOGOFF,
            payload: {
                userIsLogged: false,
                userData: {},
            },
        });
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
};

export const authSignUp = (name, email, password) => async dispatch => {
    try {
        const url = provideSignUpUrl();
        const body = JSON.stringify({ name, email, password });

        const response = await fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body,
        });

        if (response.status !== 201) {
            return exceptionsFetchRejection(response)(dispatch);
        }
        return authLogin(email, password)(dispatch);
    } catch (error) {
        return exceptionsHandleFetchErrors(error)(dispatch);
    }
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
