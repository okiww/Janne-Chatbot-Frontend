import React from 'react';
import './style.scss';
import Text from '@/component/text/text.component';
import AnimateHelper from '@/helper/animate.helper';

class HeaderTemplate extends React.PureComponent {
    state = {
        style: { opacity: 0 }
    };

    constructor(props) {
        super(props);

        this.helper = new AnimateHelper();
    }

    componentDidMount() {
        this.setAnimationComponent();
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
            interval: 311
        });
    }

    animationComponent(x) {
        const style = {
            opacity: x
        };

        this.setState({ style });
    }

    render() {
        const { style } = this.state;
        return (
            <div style={style} className="ui-header-template">
                <img src="./static/images/logo.png" alt="" />

                <ul className="ui-header-template__menu">
                    <li>
                        <Text type="h5" fontWeight="medium">
                            about
                        </Text>
                    </li>
                    <li>
                        <Text type="h5" fontWeight="medium">
                            contact us
                        </Text>
                    </li>
                    <li>
                        <Text type="h5" fontWeight="medium">
                            blog
                        </Text>
                    </li>
                </ul>

                <ul className="ui-header-template__account">
                    <li>
                        <Text type="h5" fontWeight="medium">
                            login
                        </Text>
                    </li>
                    <li className="ui-header-template__account__primary">
                        <Text type="h5" fontWeight="medium">
                            register
                        </Text>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HeaderTemplate;
