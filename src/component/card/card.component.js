import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Text from '@/component/text/text.component';

class Card extends React.PureComponent {
    static getRandom() {
        return Math.floor(Math.random() * 80917413579170571);
    }

    static priceFormatter(price) {
        if (price > 999999999) {
            return `${(price / 1000000000).toFixed(1)}m`;
        }
        if (price > 999999) {
            return `${(price / 1000000).toFixed(1)}jt`;
        }
        if (price > 999) {
            return `${(price / 1000).toFixed(1)}rb`;
        }

        return price;
    }

    get attribute() {
        const { attribute } = this.props;
        const field = [
            {
                icon: 'static/images/property/bed.svg',
                label: 'K. Tidur',
                key: 'bedroom',
                value: null
            },
            {
                icon: 'static/images/property/bath.svg',
                label: 'K. Mandi',
                key: 'bathroom',
                value: null
            },
            {
                icon: 'static/images/property/land.svg',
                label: 'm<sup>2</sup>',
                key: 'land',
                value: null
            },
            {
                icon: 'static/images/property/home.svg',
                label: 'm<sup>2</sup>',
                key: 'building',
                value: null
            }
        ];

        return field.map((item) => {
            const isFieldExist = Object.prototype.hasOwnProperty.call(attribute, item.key);

            return {
                ...item,
                value: isFieldExist && attribute[item.key]
            };
        });
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
        const {
            id, image, title, location, price, mortgage, link
        } = this.props;

        return (
            <a href={link} style={{ textDecoration: 'none' }}>
                <div className="ui-card">
                    <div className="ui-card__image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="ui-card__content">
                        <div className="ui-card__price">
                            <Text type="h2">
                                Rp
                                {Card.priceFormatter(price)}
                            </Text>
                            <Text type="p">
                                Cicilan
                                {mortgage || 'Rp. 2,61jt / bulan'}
                            </Text>
                        </div>
                        <div className="ui-card__address">{location}</div>
                        <div className="ui-card__attribute">
                            {this.attribute.map((item) => (
                                <div
                                    key={`${id}-${item.label}-${Card.getRandom()}`}
                                    className="ui-card__attribute__item"
                                >
                                    <img alt="" src={item.icon} />
                                    <Text>
                                        {item.value ? item.value : '-'}&nbsp;
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: item.value ? item.label : null
                                            }}
                                        />
                                    </Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mortgage: PropTypes.string,
    image: PropTypes.string.isRequired,
    attribute: PropTypes.shape({}).isRequired
};

Card.defaultProps = {
    mortgage: '-'
};

export default Card;
