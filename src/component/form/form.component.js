import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import ArrayHelper from '@/helper/array.helper';
import Icon from '@/component/icon/icon.component';

class FormComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch() {
        const { query } = this.state;

        if (query !== '') {
            const { onMessage } = this.props;
            this.fileInput.value = '';

            this.setState({ query: '' }, () => {
                onMessage(query);
            });
        }
    }

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
                <input
                    placeholder="Press here to talk to Nico"
                    onChange={(event) => {
                        this.setState({ query: event.target.value });
                    }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            this.onSearch();
                        }
                    }}
                    ref={(ref) => {
                        this.fileInput = ref;

                        return true;
                    }}
                />
                <button type="submit" onClick={this.onSearch}>
                    <Icon>near_me</Icon>
                </button>
            </div>
        );
    }
}

FormComponent.propTypes = {
    disabled: PropTypes.bool,
    onMessage: PropTypes.func
};

FormComponent.defaultProps = {
    disabled: false,
    onMessage: () => {}
};

export default FormComponent;
