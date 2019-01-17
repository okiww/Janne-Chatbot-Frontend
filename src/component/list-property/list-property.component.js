import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Card from '@/component/card/card.component';

import './style.scss';

class ListPropertyComponent extends React.PureComponent {
    render() {
        const { data } = this.props;
        const settings = {
            centerMode: false,
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };

        return (
            <div className="ui-list-property animated fadeIn">
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.title}>
                            <Card {...item} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

ListPropertyComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default ListPropertyComponent;
