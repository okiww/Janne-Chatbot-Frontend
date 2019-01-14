import React from 'react';
import PropTypes from 'prop-types';

import ArrayHelper from '@/helper/array.helper';
import TextComponent from '@/component/text/text.component';

import './style.scss';

class ButtonComponent extends React.Component {
    onClick() {
        const { onClick } = this.props;

        return onClick();
    }

    get className() {
        const { type } = this.props;
        const response = {
            'ui-button': true,
            [`ui-button--${type}`]: true
        };

        return ArrayHelper.ObjectToString(response);
    }

    render() {
        const { children } = this.props;

        return (
            <button className={this.className} type="submit">
                <TextComponent type="h5">{children}</TextComponent>
            </button>
        );
    }
}

ButtonComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'gradient'])
};

ButtonComponent.defaultProps = {
    children: null,
    onClick: () => {},
    type: 'primary'
};

export default ButtonComponent;
