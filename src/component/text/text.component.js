import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class TextComponent extends React.Component {
    getClassName() {
        const { type, fontWeight } = this.props;
        const response = {
            'ui-text': true,
            [`ui-text--${type}`]: true,
            [`ui-text--${fontWeight}`]: true
        };

        return Object.keys(response)
            .filter((x) => response[x])
            .join(' ');
    }

    render() {
        const { children, tag } = this.props;
        const element = {
            p: () => <p className={this.getClassName()}>{children}</p>,
            h1: () => <h1 className={this.getClassName()}>{children}</h1>,
            h2: () => <h2 className={this.getClassName()}>{children}</h2>,
            h3: () => <h3 className={this.getClassName()}>{children}</h3>,
            h4: () => <h4 className={this.getClassName()}>{children}</h4>,
            h5: () => <h5 className={this.getClassName()}>{children}</h5>
        };
        return element[tag]();
    }
}

TextComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.any)
    ]),
    type: PropTypes.string,
    tag: PropTypes.string,
    fontWeight: PropTypes.string
};

TextComponent.defaultProps = {
    children: null,
    type: 'p',
    tag: 'p',
    fontWeight: 'normal'
};

export default TextComponent;
