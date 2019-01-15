import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

import './style.scss';

const ChatTemplate = lazy(() => import('./template/chat/chat.template'));
const ChatListingTemplate = lazy(() => import('./template/chat-listing/chat-listing.template'));
const Loading = lazy(() => import('@/component/loading/loading.component'));

render(
    <div className="template">
        <Suspense fallback={null}>
            <ChatTemplate />
            <ChatListingTemplate />
            <Loading />
        </Suspense>
    </div>,
    document.getElementById('app')
);
