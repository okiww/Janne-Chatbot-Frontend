import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import AnimateHelper from '@/helper/animate.helper';
import ListChat from '@/component/list-chat/list-chat.component';
import Suggestion from '@/component/suggestion/suggestion.component';

import './style.scss';

class ChatContainerComponent extends React.PureComponent {
    state = {
        show: false,
        chat: [],
        style: { opacity: 0, zIndex: -1 }
    };

    constructor(props) {
        super(props);

        this.helper = new AnimateHelper();
    }

    static getDerivedStateFromProps(props, state) {
        const { show, chat } = props;

        if (show !== state.show) {
            return {
                show,
                chat
            };
        }

        return { chat };
    }

    componentDidUpdate(_, prevState) {
        const { show, chat } = this.state;

        if (prevState.show !== show) {
            this.setAnimationComponent(show);
        }

        if (prevState.chat.length <= chat.length) {
            const scrollHeight = this.scrollbars.getScrollHeight();
            this.scrollbars.scrollTop(scrollHeight);
        }
    }

    setAnimation({ callback = () => {}, duration = 610, interval = 610 }) {
        setTimeout(() => {
            this.helper.render(callback, duration);
        }, interval);
    }

    setAnimationComponent(show) {
        this.setAnimation({
            callback: (x) => this.animationComponent(show, x),
            duration: 166,
            interval: 366
        });
    }

    animationComponent(show, x) {
        const style = {
            opacity: show ? x : 1 - x
        };

        if (show) {
            style.display = 'block';
            style.zIndex = x <= 0.05 ? -1 : 100;
        }

        this.setState({ style });
    }

    render() {
        const { style, chat } = this.state;
        const { suggestion } = this.props;

        return (
            <div style={style} className="ui-chat-container">
                <Scrollbars
                    ref={(ref) => {
                        this.scrollbars = ref;

                        return true;
                    }}
                    autoHide
                >
                    <ListChat data={chat} />
                </Scrollbars>
                <Suggestion {...suggestion} />
            </div>
        );
    }
}

ChatContainerComponent.propTypes = {
    chat: PropTypes.arrayOf(PropTypes.shape({})),
    show: PropTypes.bool,
    suggestion: PropTypes.shape({})
};

ChatContainerComponent.defaultProps = {
    chat: [],
    show: false,
    suggestion: {
        show_options: false,
        list: []
    }
};

export default ChatContainerComponent;
