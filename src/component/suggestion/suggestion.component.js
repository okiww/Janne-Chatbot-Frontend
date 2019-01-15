import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ArrayHelper from '@/helper/array.helper';

import Text from '@/component/text/text.component';

import './style.scss';

class SuggestionComponent extends React.PureComponent {
    componentWillMount() {
        this.setState({
            data: [
                {
                    text: 'Rumah Dijual'
                },
                {
                    text: 'Apartemen Disewa'
                },
                {
                    text: 'Rumah Dijual'
                },
                {
                    text: 'Ruko Dijual'
                },
                {
                    text: 'Ruko Disewa'
                }
            ]
        });
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
        const { data } = this.state;
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
                        <div key={item.text} className="ui-suggestion__item">
                            <Text>{item.text}</Text>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

SuggestionComponent.propTypes = {
    show: PropTypes.bool
};

SuggestionComponent.defaultProps = {
    show: false
};

export default SuggestionComponent;
