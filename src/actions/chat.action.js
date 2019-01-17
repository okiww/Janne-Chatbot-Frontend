export const FETCH_CHAT_SUCCESS = 'FETCH_CHAT_SUCCESS';
export const SEND_CHAT = 'SEND_CHAT';

export const fetchChatSuccess = (message) => ({
    type: FETCH_CHAT_SUCCESS,
    payload: {
        message
    }
});

export const sendChat = (message) => ({
    type: SEND_CHAT,
    payload: { message }
});
