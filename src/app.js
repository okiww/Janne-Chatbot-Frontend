import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

import './style.scss';

const ChatTemplate = lazy(() => import('./template/chat/chat.template'));
const Loading = lazy(() => import('@/component/loading/loading.component'));

render(
    <div>
        <Suspense fallback={null}>
            <ChatTemplate />
            <Loading />
        </Suspense>
    </div>,
    document.getElementById('app')
);
