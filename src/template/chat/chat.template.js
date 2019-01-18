import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnimateHelper from '@/helper/animate.helper';
import { showNavbarAction } from '@/actions/status.action';
import { sendChat, fetchChatSuccess } from '@/actions/chat.action';
import { hideOption, showOption, setDataOption } from '@/actions/option.action';

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
    sendChatMessage: (message) => dispatch(sendChat(message)),
    setMessage: (data) => dispatch(fetchChatSuccess(data)),
    showOptionBar: () => dispatch(showOption()),
    hideOptionBar: () => dispatch(hideOption()),
    setDataOptionBar: (data) => dispatch(setDataOption(data))
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
        const { sendChatMessage, hideOptionBar } = this.props;

        sendChatMessage(param);
        hideOptionBar();
        this.onGetResponse(param);
    }

    onGetResponse(message) {
        const {
            setMessage, hideOptionBar, setDataOptionBar, showOptionBar
        } = this.props;
        hideOptionBar();

        return fetch('https://nicochatbot.herokuapp.com/post', {
            method: 'post',
            body: JSON.stringify({ message, type: 'message' })
        })
            .then((res) => res.json())
            .then(({ data }) => {
                const response = data
                    .map((item) => {
                        const { type } = item;
                        let temp = [];

                        if (type === 'options') {
                            setDataOptionBar(
                                item.data.map((x) => ({
                                    ...x,
                                    text: x.message
                                }))
                            );

                            setTimeout(() => {
                                showOptionBar();
                            }, 1000);

                            return false;
                        } else if (type === 'message') {
                            return {
                                type: 'bot',
                                message: item.message
                            };
                        } else if (type === 'listing') {
                            if (typeof item.data !== 'string') {
                                temp = item.data.map((x) => ({
                                    id: x.id,
                                    title: x.title,
                                    location: x.location.cityAndProvince,
                                    price: x.attributes.price,
                                    mortgage: x.mortgage,
                                    image: x.pictures,
                                    link: x.link,
                                    attribute: {
                                        bedroom: x.attributes.bedrooms
                                            ? x.attributes.bedrooms
                                            : null,
                                        bathroom: x.attributes.bathrooms
                                            ? x.attributes.bathrooms
                                            : null,
                                        land: x.attributes.landSize ? x.attributes.landSize : null,
                                        building: x.attributes.buildingSize
                                            ? x.attributes.buildingSize
                                            : null
                                    }
                                }));
                            } else {
                                return {
                                    type: 'bot',
                                    message: item.data
                                };
                            }

                            return {
                                type: 'suggestion',
                                data: temp
                            };
                        }

                        return {
                            type: 'bot',
                            message: item.message
                        };
                    })
                    .filter((x) => x);

                return response;
            })
            .then((res) => setMessage(res));
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
    suggestion: PropTypes.shape({}),
    setMessage: PropTypes.func,
    setDataOptionBar: PropTypes.func,
    showOptionBar: PropTypes.func,
    hideOptionBar: PropTypes.func
};

ChatTemplate.defaultProps = {
    chat: [],
    sendChatMessage: () => {},
    show: false,
    showNavbar: () => {},
    suggestion: {
        show_options: false,
        list: []
    },
    setMessage: () => {},
    setDataOptionBar: () => {},
    showOptionBar: () => {},
    hideOptionBar: () => {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatTemplate);
