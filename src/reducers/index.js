import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import StatusReducers from './status.reducers';

export default (initialState) => {
    const reducers = combineReducers({
        StatusReducers
    });

    return createStore(reducers, initialState, applyMiddleware(thunk));
};
