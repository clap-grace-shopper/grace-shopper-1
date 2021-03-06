import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import Home from './components/home'
import Cart from './components/cart'
import AllCakes from './components/allCakes'
import Checkout from './components/checkout'
import SingleCake from './components/singleCake'

import {me} from './store'
import {getCakes} from './store/product'
import {NotFound} from './components/notFound'
import {NotAuthorised} from './components/notAuthorised'
import {AfterCheckout} from './components/afterCheckout'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props
    const {isAdmin} = this.props.user
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cakes" component={AllCakes} />
        <Route path="/cakes/:id" component={SingleCake} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/api/users" component={NotAuthorised} />

        {!isAdmin && <Route exact path="/checkout" component={Checkout} />}
        {!isAdmin && (
          <Route exact path="/aftercheckout" component={AfterCheckout} />
        )}

        {isLoggedIn &&
          !isAdmin && (
            <Switch>
              {/* Routes placed here are only available after logging in */}
              {/* And are not available to admin*/}
              <Route exact path="/home" component={UserHome} />
            </Switch>
          )}
        {/* Routes placed here are only available after logging in */}
        {/* And are available to the admin only*/}
        {isLoggedIn &&
          isAdmin && <Route exact path="/admin" component={UserHome} />}
        {/* Displays our Login component as a fallback */}
        <Route component={NotFound} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(getCakes())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
