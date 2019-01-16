import React from 'react';
import PropTypes from 'prop-types';
import AnimateHelper from '@/helper/animate.helper';
import ListProperty from '@/component/list-property/list-property.component';
import Suggestion from '@/component/suggestion/suggestion.component';

import './style.scss';

class ChatContainerComponent extends React.PureComponent {
    state = {
        show: false,
        style: { opacity: 0, zIndex: -1 }
    };

    constructor(props) {
        super(props);

        this.helper = new AnimateHelper();
    }

    static getDerivedStateFromProps(props, state) {
        const { show } = props;

        if (show !== state.show) {
            return {
                show
            };
        }

        return null;
    }

    componentDidUpdate(_, prevState) {
        const { show } = this.state;

        if (prevState.show !== show) {
            this.setAnimationComponent(show);
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
        const { style } = this.state;
        const { show } = this.props;
        return (
            <div style={style} className="ui-chat-container">
                {show}
                <ListProperty />
                <Suggestion />
            </div>
        );
    }
}

ChatContainerComponent.propTypes = {
    show: PropTypes.bool
};

ChatContainerComponent.defaultProps = {
    show: false
};

export default ChatContainerComponent;
