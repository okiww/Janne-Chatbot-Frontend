import React, { lazy, Suspense } from 'react';

import './style.scss';

const Form = lazy(() => import('@/component/form/form.component'));
const Header = lazy(() => import('@/component/header/header.component'));
const ChatContainer = lazy(() => import('@/component/chat-container/chat-container.component'));
const Welcome = lazy(() => import('@/component/welcome/welcome.component'));

class ChatTemplate extends React.PureComponent {
    render() {
        return (
            <div className="ui-chat-template">
                <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                    <Welcome />
                    <ChatContainer />
                    <Form disabled />
                </Suspense>
            </div>
        );
    }
}

export default ChatTemplate;
