import React from 'react';
import PropTypes from 'prop-types';

const IconComponent = ({ children }) => <i className="material-icons">{children}</i>;

IconComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
};

IconComponent.defaultProps = {
    children: null
};

export default IconComponent;
