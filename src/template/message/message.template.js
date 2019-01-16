import React from 'react';
import AnimateHelper from '@/helper/animate.helper';
import './style.scss';

class MessageTemplate extends React.PureComponent {
    state = {
        style: { opacity: 0 },
        styleImage: { opacity: 0 }
    };

    constructor(props) {
        super(props);

        this.helper = new AnimateHelper();
    }

    componentDidMount() {
        this.setAnimationComponent();
        this.setAnimationImage();
    }

    setAnimation({ callback = () => {}, duration = 610, interval = 610 }) {
        setTimeout(() => {
            this.helper.render(callback, duration);
        }, interval);
    }

    setAnimationComponent() {
        this.setAnimation({
            callback: (x) => this.animationComponent(x),
            duration: 311,
            interval: 500
        });
    }

    setAnimationImage() {
        this.setAnimation({
            callback: (x) => this.animationImage(x),
            duration: 340,
            interval: 1000
        });
    }

    animationComponent(x) {
        const style = {
            opacity: x
        };

        this.setState({ style });
    }

    animationImage(x) {
        const calculate = 5 * x;
        const styleImage = {
            opacity: x,
            transform: `translateY(${5 - calculate}%)`
        };

        this.setState({ styleImage });
    }

    render() {
        const { style, styleImage } = this.state;

        return (
            <div className="ui-message-template" style={style}>
                <div className="ui-message-template__content">
                    <h1>NICO</h1>
                    <h3>Your Personal Agent</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <a href="https://99.co/id">GET STARTED FREE</a>
                </div>
                <img style={styleImage} src="./static/images/people.png" alt="" />
            </div>
        );
    }
}

export default MessageTemplate;
