import * as types from './types';

export const exceptionsAuthLoginRejected = response => async dispatch => {
    if (response.status === 401) {
        return dispatch({
            type: types.EXCEPTION_AUTH_LOGIN_UNAUTHORIZED,
        });
    }

    return exceptionsFetchRejection(response)(dispatch);
};

export const exceptionsFetchRejection = response => async dispatch => {
    if (response.status === 401) {
        return dispatch({
            type: types.EXCEPTION_AUTH_LOGIN_UNAUTHORIZED,
        });
    }

    if (response.status === 500) {
        return dispatch({
            type: types.EXCEPTION_INTERNAL_SERVER_ERROR,
        });
    }

    if (response.status === 404) {
        return dispatch({
            type: types.EXCEPTION_NOT_FOUND,
        });
    }

    if (response.status === 400) {
        return dispatch({
            type: types.EXCEPTION_BAD_REQUEST,
        });
    }

    if (response.status === 409) {
        return dispatch({
            type: types.EXCEPTION_CONFLICT,
        });
    }

    return exceptionsHandleFetchErrors(response)(dispatch);
};

export const exceptionsHandleFetchErrors = error => async dispatch => {
    return dispatch({
        type: types.EXCEPTION_FAIL_TO_FETCH,
        payload: error.message,
    });
};

export const exceptionInvalidName = () => async dispatch => {
    return dispatch({
        type: types.EXCEPTION_INVALID_NAME,
    });
};

export const exceptionInvalidEmail = () => async dispatch => {
    return dispatch({
        type: types.EXCEPTION_INVALID_EMAIL,
    });
};

export const exceptionInvalidPassword = () => async dispatch => {
    return dispatch({
        type: types.EXCEPTION_INVALID_PASSWORD,
    });
};
