import React from 'react';
import PropTypes from 'prop-types';
import ArrayHelper from '@/helper/array.helper';

import './style.scss';

class AvatarComponent extends React.PureComponent {
    get className() {
        const { type } = this.props;
        const response = {
            'ui-avatar': true,
            [`ui-avatar--${type}`]: true
        };

        return ArrayHelper.ObjectToString(response);
    }

    render() {
        const { children } = this.props;

        return (
            <div className={this.className}>
                <div className="ui-avatar__content">{children}</div>
            </div>
        );
    }
}

AvatarComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
    type: PropTypes.oneOf(['circle', 'rectangle'])
};

AvatarComponent.defaultProps = {
    children: null,
    type: 'circle'
};

export default AvatarComponent;
