import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showNavbarAction } from '@/actions/status.action';

import './style.scss';

const Form = lazy(() => import('@/component/form/form.component'));
const Header = lazy(() => import('@/component/header/header.component'));
const ChatContainer = lazy(() => import('@/component/chat-container/chat-container.component'));
const Welcome = lazy(() => import('@/component/welcome/welcome.component'));

const mapStateToProps = (state) => ({
    show: state.StatusReducers.show_navbar
});

const mapDispatchToProps = (dispatch) => ({
    showNavbar: () => dispatch(showNavbarAction())
});

class ChatTemplate extends React.PureComponent {
    constructor(props) {
        super(props);
        this.setShowNavbar = this.setShowNavbar.bind(this);
    }

    setShowNavbar() {
        const { showNavbar } = this.props;
        showNavbar();
    }

    render() {
        const { show } = this.props;

        return (
            <div className="ui-chat-template">
                <Suspense fallback={null}>
                    <Header show={show} />
                    <Welcome show={!show} onShowWelcome={this.setShowNavbar} />
                    <ChatContainer show={show} />
                    <Form disabled={!show} />
                </Suspense>
            </div>
        );
    }
}

ChatTemplate.propTypes = {
    show: PropTypes.bool,
    showNavbar: PropTypes.func
};

ChatTemplate.defaultProps = {
    show: false,
    showNavbar: () => {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatTemplate);
