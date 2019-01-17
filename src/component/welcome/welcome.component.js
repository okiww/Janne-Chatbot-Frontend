import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnimateHelper from '@/helper/animate.helper';
import Text from '@/component/text/text.component';
import Button from '@/component/button/button.component';
import { fetchChatSuccess } from '@/actions/chat.action';
import { setDataOption, showOption, hideOption } from '@/actions/option.action';

import './style.scss';

const mapDispatchToProps = (dispatch) => ({
    setMessage: (data) => dispatch(fetchChatSuccess(data)),
    showOptionBar: () => dispatch(showOption()),
    hideOptionBar: () => dispatch(hideOption()),
    setDataOptionBar: (data) => dispatch(setDataOption(data))
});

class WelcomeComponent extends React.PureComponent {
    state = {
        show: true,
        style: {}
    };

    constructor(props) {
        super(props);

        this.helper = new AnimateHelper();
        this.onClickStart = this.onClickStart.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        const { show } = props;

        if (props.show !== state.show) {
            return {
                show
            };
        }

        return null;
    }

    componentDidUpdate(_, prevState) {
        const { show } = this.state;

        if (prevState.show !== show) {
            this.setAnimationComponent();
        }
    }

    onClickStart() {
        const { onShowWelcome } = this.props;
        onShowWelcome();

        this.fetchData();
    }

    setAnimation({ callback = () => {}, duration = 610, interval = 610 }) {
        setTimeout(() => {
            this.helper.render(callback, duration);
        }, interval);
    }

    setAnimationComponent() {
        this.setAnimation({
            callback: (x) => this.animationComponent(x),
            duration: 166,
            interval: 0
        });
    }

    fetchData() {
        const {
            setMessage,
            setDataOptionBar,
            showOptionBar,
            hideOptionBar
        } = this.props;

        fetch('https://nicochatbot.herokuapp.com/')
            .then((res) => res.json())
            .then(({ data }) => {
                const response = data.map((item) => {
                    const { message, type } = item;

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
                    } else {
                        hideOptionBar();
                    }

                    return {
                        type: 'bot',
                        message
                    };
                });

                setMessage(response);
                return data;
            });
    }

    animationComponent(x) {
        const style = {
            opacity: 1 - x,
            transform: `translateY(-${x * 10}%)`,
            display: x > 0.9 ? 'none' : 'block'
        };
        this.setState({ style });
    }

    render() {
        const { style } = this.state;
        return (
            <div className="ui-welcome" style={style}>
                <div className="ui-welcome__image">
                    <img src="static/images/illustrator chatbot-01.png" alt="" />
                </div>
                <Text type="h2" fontWeight="semi-bold">
                    NICO
                </Text>
                <Text type="p">
                    NICO adalah bot yang siap membantu Anda untuk menemukan properti idaman Anda.
                    Beritahu NICO apa yang ingin Anda cari.
                </Text>
                <Button onClick={this.onClickStart}>Chat with Nico</Button>
            </div>
        );
    }
}

WelcomeComponent.propTypes = {
    onShowWelcome: PropTypes.func,
    setMessage: PropTypes.func,
    setDataOptionBar: PropTypes.func,
    showOptionBar: PropTypes.func,
    hideOptionBar: PropTypes.func
};

WelcomeComponent.defaultProps = {
    onShowWelcome: () => {},
    setMessage: () => {},
    setDataOptionBar: () => {},
    showOptionBar: () => {},
    hideOptionBar: () => {}
};

export default connect(
    null,
    mapDispatchToProps
)(WelcomeComponent);
