import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './reducers';


import './style.scss';

const ChatTemplate = lazy(() => import('./template/chat/chat.template'));
const MessageTemplate = lazy(() => import('./template/message/message.template'));
const HeaderTemplate = lazy(() => import('./template/header/header.template'));

const store = configureStore();

render(
    <Provider store={store}>
        <div className="template">
            <Suspense fallback={null}>
                <HeaderTemplate />
                <MessageTemplate />
                <ChatTemplate />
            </Suspense>
        </div>
    </Provider>,
    document.getElementById('app')
);
