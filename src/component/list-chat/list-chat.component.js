import React from 'react';
import PropTypes from 'prop-types';
import ArrayHelper from '@/helper/array.helper';
import Text from '@/component/text/text.component';
import ListProperty from '@/component/list-property/list-property.component';

import './style.scss';

class ListChatComponent extends React.PureComponent {
    static getClassNameBot(index, data) {
        const response = {
            'ui-list-chat__item': true,
            'ui-list-chat__item--bot': true,
            'ui-list-chat__item--without-icon': index !== 0 && data[index - 1].type === 'bot'
        };

        return ArrayHelper.ObjectToString(response);
    }

    render() {
        const { data } = this.props;

        return (
            <div className="ui-list-chat">
                {data.map((item, index) => {
                    const response = {
                        bot: () => (
                            <div className={ListChatComponent.getClassNameBot(index, data)}>
                                <Text>{item.message}</Text>
                            </div>
                        ),
                        user: () => (
                            <div className="ui-list-chat__item ui-list-chat__item--user">
                                <Text>
                                    {item.message}
                                    {' '}
                                    {index}
                                </Text>
                            </div>
                        ),
                        suggestion: () => <ListProperty data={item.data} />
                    };

                    return response[item.type]();
                })}
            </div>
        );
    }
}

ListChatComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({}))
};

ListChatComponent.defaultProps = {
    data: []
};

export default ListChatComponent;
