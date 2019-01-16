import { SHOW_NAVBAR, HIDE_NAVBAR } from '@/reducers/status.reducers';

export function showNavbarAction() {
    return {
        type: SHOW_NAVBAR
    };
}

export function hideNavbarAction() {
    return {
        type: HIDE_NAVBAR
    };
}
