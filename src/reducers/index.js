import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ChatReducers from './chat.reducers';
import OptionReducers from './option.reducers';
import StatusReducers from './status.reducers';

export default (initialState) => {
    const reducers = combineReducers({
        ChatReducers,
        OptionReducers,
        StatusReducers
    });

    return createStore(reducers, initialState, applyMiddleware(thunk));
};
