import React from 'react';
import Slider from 'react-slick';

import Card from '@/component/card/card.component';

import './style.scss';

class ListPropertyComponent extends React.PureComponent {
    render() {
        const settings = {
            centerMode: false,
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };

        const data = [
            {
                image: 'https://strap.domain.com.au/dream-homes-nsw/DreamHomes2014860040.jpg',
                title: 'Hallet Cove',
                city: 'Sukajadi, Bandung, Jawa Barat'
            },
            {
                image: 'https://strap.domain.com.au/dream-homes-nsw/DreamHomes2014823337.jpg',
                title: 'Fairy Meadow',
                city: 'Sukajadi, Bandung, Jawa Barat'
            },
            {
                image: 'https://strap.domain.com.au/dream-homes-nsw/DreamHomes2014852147.jpg',
                title: 'Palm Cove',
                city: 'Sukajadi, Bandung, Jawa Barat'
            },
            {
                image:
                    'https://rimh2.domainstatic.com.au/m5_9MNYw6AhYqpmeD6A4sF949qw=/660x440/filters:format(jpeg):quality(80)/https://b.domainstatic.com.au/3312_1_dp_181102_041122-w1920-h1080-w1336-h768',
                title: 'The Crescent Darling Point',
                city: 'Sukajadi, Bandung, Jawa Barat'
            },
            {
                image:
                    'https://rimh2.domainstatic.com.au/AVMhMy_kDE3DHYUGu4tL3kjuJRs=/660x440/filters:format(jpeg):quality(80)/https://rimh2.domain.com.au/_7FJJeF2eMj30As7lZg5gzWSee8=/fit-in/800x600/filters:format(jpeg)/2454_1_13_190113_101245-w1460-h974',
                title: 'Highline Westmead',
                city: 'Sukajadi, Bandung, Jawa Barat'
            },
            {
                image:
                    'https://rimh2.domainstatic.com.au/nSdIFy0zo8svp8B9jUaSSYMRpwQ=/660x440/filters:format(jpeg):quality(80)/https://b.domainstatic.com.au/764_1_dp_181223_112508-w1732-h1154-w1336-h768',
                title: 'St Columbans Turramurra',
                city: 'Sukajadi, Bandung, Jawa Barat'
            },
            {
                image:
                    'https://rimh2.domainstatic.com.au/y9W7Y1eh5H6a7F1mASBF-B7uC2A=/660x440/filters:format(jpeg):quality(80)/https://b.domainstatic.com.au/3111_6_dp_180823_075610-w1600-h861-w1336-h768',
                title: 'Oceans',
                city: 'Sukajadi, Bandung, Jawa Barat'
            }
        ];

        return (
            <div className="ui-list-property">
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

export default ListPropertyComponent;
