export const SHOW_OPTIONS = 'SHOW_OPTIONS';
export const HIDE_OPTIONS = 'HIDE_OPTIONS';
export const SET_DATA_OPTIONS = 'SET_DATA_OPTIONS';

const initial = {
    show: false,
    data: [
        // TODO
        // Sample Option
        // {
        //     text: 'Rumah Dijual'
        // },
        // {
        //     text: 'Apartemen Disewa'
        // },
        // {
        //     text: 'Rumah Dijual'
        // },
        // {
        //     text: 'Ruko Dijual'
        // },
        // {
        //     text: 'Ruko Disewa'
        // }
    ]
};

const StatusReducers = (state = initial, action) => {
    switch (action.type) {
    case SHOW_OPTIONS:
        return {
            ...state,
            show: true
        };
    case HIDE_OPTIONS:
        return {
            ...state,
            show: false
        };
    case SET_DATA_OPTIONS:
        return {
            ...state,
            data: action.payload.option
        };
    default:
        return state;
    }
};

export default StatusReducers;
