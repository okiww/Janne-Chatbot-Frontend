export const FETCH_CHAT_BEGIN = 'FETCH_CHAT_BEGIN';
export const FETCH_CHAT_SUCCESS = 'FETCH_CHAT_SUCCESS';
export const FETCH_CHAT_FAILURE = 'FETCH_CHAT_FAILURE';
export const SEND_CHAT = 'SEND_CHAT';

export const fetchChatBegin = () => ({
    type: FETCH_CHAT_BEGIN
});

export const fetchChatSuccess = chat => {
    console.log('test');
    return {
        type: FETCH_CHAT_SUCCESS,
        payload: { chat }
    };
};

export const fetchChatFailure = error => ({
    type: FETCH_CHAT_FAILURE,
    payload: { error }
});

export const sendChat = message => ({
    type: SEND_CHAT,
    payload: { message }
});
