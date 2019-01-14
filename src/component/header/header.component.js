import React from 'react';
import './style.scss';

import Avatar from '@/component/avatar/avatar.component';
import Text from '@/component/text/text.component';

class HeaderComponent extends React.PureComponent {
    render() {
        return (
            <div className="ui-header">
                <div className="ui-header__title">
                    <Text
                        tag="p"
                        type="normal"
                    >
                        Setting up your account
                    </Text>
                    <Text
                        tag="h3"
                        type="h3"
                        fontWeight="semi-bold"
                    >
                        Get to know you
                    </Text>
                </div>
                <div className="ui-header__image">
                    <Avatar
                        size="35px"
                    >
                        <img
                            className="ui-header__image"
                            src="static/images/account.jpg"
                            alt=""
                        />
                    </Avatar>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
