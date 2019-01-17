import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnimateHelper from '@/helper/animate.helper';
import { showNavbarAction } from '@/actions/status.action';
import { sendChat } from '@/actions/chat.action';

import './style.scss';

const Form = lazy(() => import('@/component/form/form.component'));
const Header = lazy(() => import('@/component/header/header.component'));
const ChatContainer = lazy(() => import('@/component/chat-container/chat-container.component'));
const Welcome = lazy(() => import('@/component/welcome/welcome.component'));

const mapStateToProps = (state) => ({
    show: state.StatusReducers.show_navbar,
    suggestion: state.OptionReducers,
    chat: state.ChatReducers.chat
});

const mapDispatchToProps = (dispatch) => ({
    showNavbar: () => dispatch(showNavbarAction()),
    sendChatMessage: (message) => dispatch(sendChat(message))
});

class ChatTemplate extends React.PureComponent {
    state = {
        enableClick: false,
        showDialog: false,
        style: { opacity: 0, display: 'none' },
        styleButton: { opacity: 0, display: 'none' }
    };

    constructor(props) {
        super(props);
        this.setShowNavbar = this.setShowNavbar.bind(this);
        this.showChatDialog = this.showChatDialog.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.helper = new AnimateHelper();
    }

    componentDidMount() {
        this.setAnimationButton();

        setTimeout(() => {
            this.showChatDialog();
            this.setState({ enableClick: true });
        }, 3000);
    }

    onMessage(param) {
        const { sendChatMessage } = this.props;

        sendChatMessage(param);
    }

    setShowNavbar() {
        const { showNavbar } = this.props;
        showNavbar();
    }

    setAnimation({ callback = () => {}, duration = 610, interval = 610 }) {
        setTimeout(() => {
            this.helper.render(callback, duration);
        }, interval);
    }

    setAnimationComponent(show) {
        this.setAnimation({
            callback: (x) => this.animationComponent(show, x),
            duration: show ? 611 : 166,
            interval: 0
        });
    }

    setAnimationButton() {
        this.setAnimation({
            callback: (x) => this.animationButton(x),
            duration: 166,
            interval: 1500
        });
    }

    showChatDialog() {
        const { showDialog } = this.state;
        this.setState({ showDialog: !showDialog }, () => {
            // eslint-disable-next-line
            this.setAnimationComponent(this.state.showDialog);
        });
    }

    animationComponent(show, x) {
        const style = {
            opacity: show ? x : 1 - x
        };

        const translate = x * 5;

        if (show) {
            style.display = x > 0.05 ? 'block' : 'none';
            style.transform = `translateY(${5 - translate}%)`;
        } else {
            style.display = x > 0.95 ? 'none' : 'block';
            style.transform = `translateY(${translate}%)`;
        }

        this.setState({ style });
    }

    animationButton(x) {
        const styleButton = {
            opacity: x
        };

        this.setState({ styleButton });
    }

    render() {
        const { show, suggestion, chat } = this.props;
        const { style, styleButton, enableClick } = this.state;

        return (
            <div className="ui-chat">
                <div className="ui-chat-template" style={style}>
                    <Suspense fallback={null}>
                        <Header show={show} />
                        <Welcome show={!show} onShowWelcome={this.setShowNavbar} />
                        <ChatContainer chat={chat} show={show} suggestion={suggestion} />
                        <Form disabled={!show} onMessage={this.onMessage} />
                    </Suspense>
                </div>
                <button
                    style={styleButton}
                    className="ui-chat-template__button"
                    type="submit"
                    onClick={enableClick ? this.showChatDialog : null}
                >
                    <img src="./static/images/apps.png" alt="" />
                </button>
            </div>
        );
    }
}

ChatTemplate.propTypes = {
    chat: PropTypes.arrayOf(PropTypes.shape({})),
    sendChatMessage: PropTypes.func,
    show: PropTypes.bool,
    showNavbar: PropTypes.func,
    suggestion: PropTypes.shape({})
};

ChatTemplate.defaultProps = {
    chat: [],
    sendChatMessage: () => {},
    show: false,
    showNavbar: () => {},
    suggestion: {
        show_options: false,
        list: []
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatTemplate);
