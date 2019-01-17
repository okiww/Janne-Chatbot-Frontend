import React from 'react';
import PropTypes from 'prop-types';
import ArrayHelper from '@/helper/array.helper';
import Text from '@/component/text/text.component';

class ListChatItemComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.getClassName = this.getClassName.bind(this);
    }

    getClassName() {
        const { type, index, data } = this.props;

        const response = {
            animated: true,
            fadeIn: true,
            'ui-list-chat__item': true,
            [`ui-list-chat__item--${type}`]: true,
            'ui-list-chat__item--without-icon':
                index !== 0 && data[index - 1].type === 'bot' && type === 'bot'
        };

        return ArrayHelper.ObjectToString(response);
    }

    render() {
        const { children } = this.props;

        return (
            <div className={this.getClassName()}>
                <Text>{children}</Text>
            </div>
        );
    }
}

ListChatItemComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.any)
    ]),
    index: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    type: PropTypes.oneOf(['bot', 'user'])
};

ListChatItemComponent.defaultProps = {
    children: null,
    data: [],
    type: 'bot'
};

export default ListChatItemComponent;
