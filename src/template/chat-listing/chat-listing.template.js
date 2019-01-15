import React, { lazy, Suspense } from 'react';

import './style.scss';

const Header = lazy(() => import('@/component/header/header.component'));
const Form = lazy(() => import('@/component/form/form.component'));
const ChatContainer = lazy(() => import('@/component/chat-container/chat-container.component'));

class ChatListingTemplate extends React.PureComponent {
    render() {
        return (
            <div className="ui-chat-template">
                <Suspense fallback={null}>
                    <Header show />
                    <ChatContainer />
                    <Form />
                </Suspense>
            </div>
        );
    }
}

export default ChatListingTemplate;
