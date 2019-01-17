import React from 'react';
import PropTypes from 'prop-types';
import ListProperty from '@/component/list-property/list-property.component';
import ListChatItem from '@/component/list-chat-item/list-chat-item.component';

import './style.scss';

class ListChatComponent extends React.PureComponent {
    render() {
        const { data } = this.props;

        return (
            <div className="ui-list-chat">
                {data.map((item, index) => {
                    const response = {
                        bot: () => (
                            <ListChatItem
                                key={`${index}-${item.message}`}
                                index={index}
                                data={data}
                                type={item.type}
                            >
                                {item.message}
                            </ListChatItem>
                        ),
                        user: () => (
                            <ListChatItem
                                key={`${index}-${item.message}`}
                                index={index}
                                data={data}
                                type={item.type}
                            >
                                {item.message}
                            </ListChatItem>
                        ),
                        suggestion: () => (
                            <ListProperty key={`${index}-${item.type}`} data={item.data} />
                        )
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
