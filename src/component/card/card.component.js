import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Text from '@/component/text/text.component';

class Card extends React.PureComponent {
    get attribute() {
        return [
            {
                icon: 'uif uif-property-bedrooms',
                label: 'K. Tidur',
                value: 2
            },
            {
                icon: 'uif uif-property-bathrooms',
                label: 'K. Mandi',
                value: 1
            },
            {
                icon: 'uif uif-property-landSize',
                label: '',
                value: 150
            },
            {
                icon: 'uif uif-property-buildingSize',
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
                            <div className="ui-card__attribute__item" key={item.label}>
                                <i className={item.icon} />
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
