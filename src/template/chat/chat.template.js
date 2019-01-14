import React, { lazy, Suspense } from 'react';

import './style.scss';

const Header = lazy(() => import('@/component/header/header.component'));
const Form = lazy(() => import('@/component/form/form.component'));
const Welcome = lazy(() => import('@/component/welcome/welcome.component'));

class ChatTemplate extends React.PureComponent {
    render() {
        return (
            <div className="ui-chat-template">
                <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                    <Welcome />
                    <Form />
                </Suspense>
            </div>
        );
    }
}

export default ChatTemplate;
