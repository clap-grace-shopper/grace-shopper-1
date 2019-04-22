import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup, UserHome } from './components';
import Cart from './components/cart';
import AllCakes from './components/allCakes';
import Checkout from './components/checkout';
import SingleCake from './components/singleCake';

import { me } from './store';
import { getCakes } from './store/product';
/**
 * COMPONENT
 */
class Routes extends Component {
    componentDidMount() {
        this.props.loadInitialData();
    }

    render() {
        const { isLoggedIn } = this.props;

        return ( <
            Switch > { /* Routes placed here are available to all visitors */ } <
            Route exact path = "/login"
            component = { Login }
            /> <
            Route exact path = "/signup"
            component = { Signup }
            /> <
            Route exact path = "/cakes"
            component = { AllCakes }
            /> <
            Route path = "/cakes/:id"
            component = { SingleCake }
            /> <
            Route path = "/cart"
            component = { Cart }
            />

            {
                isLoggedIn && ( <
                    Switch > { /* Routes placed here are only available after logging in */ } <
                    Route path = "/home"
                    component = { UserHome }
                    /> <
                    Route path = "/checkout"
                    component = { Checkout }
                    /> <
                    /Switch>
                )
            } { /* Displays our Login component as a fallback */ } <
            Route component = { Login }
            /> <
            /Switch>
        );
    }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
        // Otherwise, state.user will be an empty object, and state.user.id will be falsey
        isLoggedIn: !!state.user.id
    };
};

const mapDispatch = (dispatch) => {
    return {
        loadInitialData() {
            dispatch(me());
            dispatch(getCakes());
        }
    };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
    loadInitialData: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};