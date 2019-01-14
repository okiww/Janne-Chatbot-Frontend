import React from 'react';
import './style.scss';

import Text from '@/component/text/text.component';
import Button from '@/component/button/button.component';

class WelcomeComponent extends React.PureComponent {
    render() {
        return (
            <div className="ui-welcome">
                <img className="ui-welcome__image" src="static/images/welcome.jpg" alt="" />
                <Text type="h2" fontWeight="semi-bold">
                    You're all set!
                </Text>
                <Text type="p">
                    Remember that you can always reach me by pressing the fitsy icon in the left
                    bottom corner
                </Text>
                <Button type="gradient">Start Using Fitsy</Button>
            </div>
        );
    }
}

export default WelcomeComponent;
