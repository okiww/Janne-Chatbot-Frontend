import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Text from '@/component/text/text.component';

class Card extends React.PureComponent {
    get attribute() {
        return [
            {
                icon: 'static/images/property/bed.svg',
                label: 'K. Tidur',
                value: 2
            },
            {
                icon: 'static/images/property/bath.svg',
                label: 'K. Mandi',
                value: 1
            },
            {
                icon: 'static/images/property/land.svg',
                label: '',
                value: 150
            },
            {
                icon: 'static/images/property/home.svg',
                label: '',
                value: 60
            }
        ];
    }

    renderMetric() {
        return (
            <span>
                m
                <sup>2</sup>
            </span>
        );
    }

    render() {
        const { image, title, city } = this.props;

        return (
            <div className="ui-card">
                <div className="ui-card__image">
                    <img src={image} alt={title} />
                </div>
                <div className="ui-card__content">
                    <div className="ui-card__price">
                        <Text type="h2">Rp 326jt-an</Text>
                        <Text type="p">Cicilan Rp. 2,61 jt/bln</Text>
                    </div>
                    <div className="ui-card__address">{city}</div>
                    <div className="ui-card__attribute">
                        {this.attribute.map((item) => (
                            <div key={item.label} className="ui-card__attribute__item">
                                <img alt="" src={item.icon} />
                                <Text>
                                    {item.value}
                                    {item.label === 'L. Bangunan' || item.label === 'L. Tanah'
                                        ? this.renderMetric()
                                        : null}
                                    {item.label}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
};

export default Card;
