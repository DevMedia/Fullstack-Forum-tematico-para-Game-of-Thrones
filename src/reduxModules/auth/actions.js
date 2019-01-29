import jwtDecode from 'jwt-decode';

import * as types from './types';
import { provideLoginUrl, provideSignUpUrl } from '../../helpers/urlProviders';
import { storeToken } from '../../helpers/tokenManager';

export const authLogin = (email, password) => async dispatch => {
    const url = provideLoginUrl();
    const body = JSON.stringify({ email, password });

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body
    });
    const value = await response.json();
    const token = value.token;

    const payload = jwtDecode(token);
    storeToken(token);

    dispatch({
        type: types.AUTH_LOGIN,
        payload
    });    
};

export const authSignUp = (name, email, password) => async dispatch => {
    const url = provideSignUpUrl();
    const body = JSON.stringify({ name, email, password });

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body
    });

    dispatch({
        type: types.AUTH_SIGNUP,
        payload: response.status === 201 
    });
};