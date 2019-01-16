export const SHOW_NAVBAR = 'SHOW_NAVBAR';
export const HIDE_NAVBAR = 'HIDE_NAVBAR';

const initial = {
    show_navbar: false
};

const StatusReducers = (state = initial, action) => {
    switch (action.type) {
    case SHOW_NAVBAR:
        return {
            ...state,
            show_navbar: true
        };
    case HIDE_NAVBAR:
        return {
            ...state,
            show_navbar: false
        };
    default:
        return state;
    }
};

export default StatusReducers;
