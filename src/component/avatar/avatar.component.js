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

    get style() {
        const { size } = this.props;

        return {
            width: size,
            height: size
        };
    }

    render() {
        const { children } = this.props;

        return (
            <div className={this.className}>
                <div className="ui-avatar__content" style={this.style}>
                    {children}
                </div>
            </div>
        );
    }
}

AvatarComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
    type: PropTypes.oneOf(['circle', 'rectangle']),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AvatarComponent.defaultProps = {
    children: null,
    type: 'circle',
    size: '30px'
};

export default AvatarComponent;
