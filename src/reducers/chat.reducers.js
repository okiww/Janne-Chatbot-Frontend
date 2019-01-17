import { FETCH_CHAT_SUCCESS } from '../actions/chat.action';

export const ADD_CHAT = 'ADD_CHAT';
export const SEND_CHAT = 'SEND_CHAT';

const initial = {
    chat: [],
    error: null
};

const ChatReducers = (state = initial, action) => {
    switch (action.type) {
    case ADD_CHAT:
        return {
            ...state,
            chat: [...state.chat, action.payload.message]
        };
    case SEND_CHAT:
        return {
            ...state,
            chat: [
                ...state.chat,
                {
                    type: 'user',
                    message: action.payload.message
                }
            ]
        };
    case FETCH_CHAT_SUCCESS:
        return {
            ...state,
            chat: [...state.chat, ...action.payload.message]
        };
    default:
        return state;
    }
};

export default ChatReducers;
