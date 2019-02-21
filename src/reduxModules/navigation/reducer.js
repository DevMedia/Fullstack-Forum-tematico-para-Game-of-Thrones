import * as types from './types';

const initialState = {
    sidebarIsOpen: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case types.NAVIGATION_OPEN_SIDEBAR:
        return { sidebarIsOpen: true };

    case types.NAVIGATION_CLOSE_SIDEBAR:
        return { sidebarIsOpen: false };

    case types.NAVIGATION_TOGGLE_SIDEBAR:
        return { sidebarIsOpen: !state.sidebarIsOpen };

    default:
        return initialState;
    }
};
