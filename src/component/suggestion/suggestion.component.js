import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ArrayHelper from '@/helper/array.helper';
import Text from '@/component/text/text.component';
import { setDataOption, showOption, hideOption } from '@/actions/option.action';
import { fetchChatSuccess } from '@/actions/chat.action';

import './style.scss';

const mapDispatchToProps = (dispatch) => ({
    setMessage: (data) => dispatch(fetchChatSuccess(data)),
    showOptionBar: () => dispatch(showOption()),
    hideOptionBar: () => dispatch(hideOption()),
    setDataOptionBar: (data) => dispatch(setDataOption(data))
});

class SuggestionComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClickSuggestion = this.onClickSuggestion.bind(this);
    }

    onClickSuggestion(message) {
        const {
            setMessage, hideOptionBar, setDataOptionBar, showOptionBar
        } = this.props;
        hideOptionBar();

        return fetch('https://nicochatbot.herokuapp.com/post', {
            method: 'post',
            body: JSON.stringify({ message, type: 'option' })
        })
            .then((res) => res.json())
            .then(({ data }) => {
                const response = data
                    .map((item) => {
                        const { type } = item;
                        let temp = [];

                        if (type === 'options') {
                            setDataOptionBar(
                                item.data.map((x) => ({
                                    ...x,
                                    text: x.message
                                }))
                            );

                            setTimeout(() => {
                                showOptionBar();
                            }, 1000);

                            return false;
                        }

                        if (typeof item.data !== 'string') {
                            temp = item.data.map((x) => ({
                                id: x.id,
                                title: x.title,
                                location: x.location.cityAndProvince,
                                price: x.attributes.price,
                                mortgage: x.mortgage,
                                image: x.pictures,
                                link: x.link,
                                attribute: {
                                    bedroom: x.attributes.bedrooms ? x.attributes.bedrooms : null,
                                    bathroom: x.attributes.bathrooms
                                        ? x.attributes.bathrooms
                                        : null,
                                    land: x.attributes.landSize ? x.attributes.landSize : null,
                                    building: x.attributes.buildingSize
                                        ? x.attributes.buildingSize
                                        : null
                                }
                            }));
                        } else {
                            return {
                                type: 'bot',
                                message: item.data
                            };
                        }

                        return {
                            type: 'suggestion',
                            data: temp
                        };
                    })
                    .filter((x) => x);

                return response;
            })
            .then((res) => setMessage(res));
    }

    get className() {
        const { show } = this.props;
        const response = {
            'ui-suggestion': true,
            'ui-suggestion--show': show
        };

        return ArrayHelper.ObjectToString(response);
    }

    render() {
        const { data } = this.props;
        const settings = {
            arrows: false,
            centerMode: false,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };

        return (
            <div className={this.className}>
                <Slider {...settings}>
                    {data.map((item) => (
                        <div
                            key={item.text}
                            className="ui-suggestion__item"
                            onClick={() => this.onClickSuggestion(item.text)}
                            onKeyPress={() => this.onClickSuggestion(item.text)}
                            role="button"
                            tabIndex={0}
                        >
                            <Text>{item.text}</Text>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

SuggestionComponent.propTypes = {
    show: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    setMessage: PropTypes.func,
    setDataOptionBar: PropTypes.func,
    showOptionBar: PropTypes.func,
    hideOptionBar: PropTypes.func
};

SuggestionComponent.defaultProps = {
    show: false,
    data: [],
    setMessage: () => {},
    setDataOptionBar: () => {},
    showOptionBar: () => {},
    hideOptionBar: () => {}
};

export default connect(
    null,
    mapDispatchToProps
)(SuggestionComponent);
