import { SEND_CHAT } from '@/reducers/chat.reducers';

export function sendChat(message) {
    return {
        type: SEND_CHAT,
        payload: {
            message
        }
    };
}
