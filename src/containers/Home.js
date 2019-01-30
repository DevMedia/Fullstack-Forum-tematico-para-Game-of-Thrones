import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavigationRouter from '../components/NavigationRouter';

export class HomeContainer extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        const { userIsLogged } = this.props;
        return (
            <NavigationRouter userIsLogged={userIsLogged} />
        );
    }
}

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
