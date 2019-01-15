import React from 'react';
import './style.scss';

import Text from '@/component/text/text.component';
import Button from '@/component/button/button.component';

class WelcomeComponent extends React.PureComponent {
    render() {
        return (
            <div className="ui-welcome">
                <div className="ui-welcome__image">
                    <img src="static/images/illustrator chatbot-01.png" alt="" />
                </div>
                <Text type="h2" fontWeight="semi-bold">
                    You're all set!
                </Text>
                <Text type="p">
                    Remember that you can always reach me by pressing the Nico icon in the left
                    bottom corner
                </Text>
                <Button>Start Using Nico</Button>
            </div>
        );
    }
}

export default WelcomeComponent;
