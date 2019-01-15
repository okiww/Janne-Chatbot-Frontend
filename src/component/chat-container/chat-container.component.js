import React from 'react';
import ListProperty from '@/component/list-property/list-property.component';
import Suggestion from '@/component/suggestion/suggestion.component';

import './style.scss';

class ChatContainerComponent extends React.PureComponent {
    render() {
        return (
            <div className="ui-chat-container">
                <ListProperty />
                <Suggestion />
            </div>
        );
    }
}

export default ChatContainerComponent;
