import * as types from './types';

export const navigationOpenSidebar = () => async dispatch => {
    return dispatch({
        type: types.NAVIGATION_OPEN_SIDEBAR,
    });
};

export const navigationCloseSidebar = () => async dispatch => {
    return dispatch({
        type: types.NAVIGATION_CLOSE_SIDEBAR,
    });
};

export const navigationToggleSidebar = () => async dispatch => {
    return dispatch({
        type: types.NAVIGATION_TOGGLE_SIDEBAR,
    });
};
