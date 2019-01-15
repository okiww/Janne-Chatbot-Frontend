import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import ArrayHelper from '@/helper/array.helper';
import Icon from '@/component/icon/icon.component';

class FormComponent extends React.PureComponent {
    get className() {
        const { disabled } = this.props;
        const response = {
            'ui-form': true,
            'ui-form--disable': disabled
        };

        return ArrayHelper.ObjectToString(response);
    }

    render() {
        return (
            <div className={this.className}>
                <input placeholder="Press here to talk to Nico" />
                <button type="submit">
                    <Icon>near_me</Icon>
                </button>
            </div>
        );
    }
}

FormComponent.propTypes = {
    disabled: PropTypes.bool
};

FormComponent.defaultProps = {
    disabled: false
};

export default FormComponent;
