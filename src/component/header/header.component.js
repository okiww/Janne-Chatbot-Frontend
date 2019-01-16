import React from 'react';
import PropTypes from 'prop-types';
import ArrayHelper from '@/helper/array.helper';

import Avatar from '@/component/avatar/avatar.component';
import Text from '@/component/text/text.component';

import './style.scss';

class HeaderComponent extends React.PureComponent {
    get className() {
        const { show } = this.props;
        const response = {
            'ui-header': true,
            'ui-header--show': show
        };

        return ArrayHelper.ObjectToString(response);
    }

    render() {
        return (
            <div className={this.className}>
                <div className="ui-header__image">
                    <Avatar size="35px">
                        <img src="static/images/nico.png" alt="" />
                    </Avatar>
                </div>
                <div className="ui-header__title">
                    <Text tag="h3" type="h5" fontWeight="semi-bold">
                        NICO
                    </Text>
                    <Text tag="p" type="h6">
                        Your personal Agent
                    </Text>
                </div>
            </div>
        );
    }
}

HeaderComponent.propTypes = {
    show: PropTypes.bool
};
HeaderComponent.defaultProps = {
    show: false
};

export default HeaderComponent;
