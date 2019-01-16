import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './reducers';

import './style.scss';

const ChatTemplate = lazy(() => import('./template/chat/chat.template'));
const Loading = lazy(() => import('@/component/loading/loading.component'));

const store = configureStore();

render(
    <Provider store={store}>
        <div className="template">
            <Suspense fallback={null}>
                <ChatTemplate />
                <Loading />
            </Suspense>
        </div>
    </Provider>,
    document.getElementById('app')
);
