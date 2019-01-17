import { SHOW_OPTIONS, HIDE_OPTIONS, SET_DATA_OPTIONS } from '@/reducers/option.reducers';

export const showOption = () => ({
    type: SHOW_OPTIONS
});

export const hideOption = () => ({
    type: HIDE_OPTIONS
});

export const setDataOption = (option) => ({
    type: SET_DATA_OPTIONS,
    payload: {
        option
    }
});
