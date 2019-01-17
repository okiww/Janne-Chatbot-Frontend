import { FETCH_CHAT_BEGIN, FETCH_CHAT_SUCCESS, FETCH_CHAT_FAILURE } from '../actions/chat.action';

// export const ADD_CHAT = 'ADD_CHAT';
export const SEND_CHAT = 'SEND_CHAT';

const initial = {
    chat: [
        // TODO
        // Sample Chat
        {
            type: 'bot',
            message: 'Apakah Anda ingin mencari di semua kota Bandung atau ada daerah spesifik?'
        },
        {
            type: 'bot',
            message: 'Apakah Anda ingin mencari di semua kota Bandung atau ada daerah spesifik?'
        }
    ],
    error: null
};

const getChat = () => fetch('https://nicochatbot.herokuapp.com/')
    .then((res) => res.json())
    .then((json) => json.data);

const ChatReducers = (state = initial, action) => {
    switch (action.type) {
    case FETCH_CHAT_BEGIN:
        return {
            ...state,
            chat: [...state.chat, action.payload.message]
        };
    case FETCH_CHAT_SUCCESS:
        return {
            ...state,
            chat: [...state.chat, getChat()]
        };
    case FETCH_CHAT_FAILURE:
        return {
            ...state,
            error: action.payload.error,
            items: []
        };
    default:
        return state;
    }
};

export default ChatReducers;
