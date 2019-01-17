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

        const pictures = [
            'https://rimh2.domainstatic.com.au/jaCHmrKczn1bLjLF8TxK0_H7rl8=/660x440/filters:format(jpeg):quality(80)/2014657896_2_1_181122_050154-w4256-h2832',
            'https://rimh2.domainstatic.com.au/M-ESHWm78cxR5bdeBX8q_TyqUPM=/660x440/filters:format(jpeg):quality(80)/https://b.domainstatic.com.au/3261_2_dp_181011_045424-w6000-h3387-w1336-h768',
            'https://rimh2.domainstatic.com.au/wIk6yfjHSSOnZ-p5iuhePhcpeWs=/660x440/filters:format(jpeg):quality(80)/2014885467_1_1_190116_064416-w3872-h2581',
            'https://rimh2.domainstatic.com.au/HtItdt-nnByrJzpN95-ihV1U9U0=/660x440/filters:format(jpeg):quality(80)/2014881565_1_1_190115_031526-w5760-h3840',
            'https://rimh2.domainstatic.com.au/fluZTo0-I10ofdnWwSq_Hk2T0Bg=/660x440/filters:format(jpeg):quality(80)/2014879884_1_1_190115_070208-w5040-h3360',
            'https://rimh2.domainstatic.com.au/wPkS5kkFdjaiwhyOtD_IWjArkdQ=/660x440/filters:format(jpeg):quality(80)/2014885828_1_1_190116_090054-w6299-h4724',
            'https://rimh2.domainstatic.com.au/JkWsZ1avRQ8LiSxX44xidsn9hcI=/660x440/filters:format(jpeg):quality(80)/2014849150_6_pi_181220_051327-w5037-h3359',
            'https://rimh2.domainstatic.com.au/ac1Z3wjQUblfqMCXFEiniVvZJDE=/660x440/filters:format(jpeg):quality(80)/2014868049_1_1_190108_124442-w4256-h2832'
        ];

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
                                mortgage: null,
                                image: pictures[Math.floor(Math.random() * pictures.length)],
                                link: null,
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
