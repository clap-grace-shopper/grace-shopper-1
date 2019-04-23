import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar as Nav} from 'react-bulma-components/full'

const Navbar = (props, {handleClick, isLoggedIn}) => {
  return (
    <Nav color="light">
      {props && props.isLoggedIn ? (
        !props.user.isAdmin ? (
          <Nav.Menu>
            <Nav.Container>
              <img
                id="nav"
                src="https://banner2.kisspng.com/20180313/czw/kisspng-cupcake-bakery-doughnut-logo-simple-hand-painted-cake-5aa7f4e98069d0.752785361520956649526.jpg"
                alt="Clap for Cakes Logo"
              />
              <Link to="/home">
                <Nav.Item>Home</Nav.Item>
              </Link>
              <Link to="/cakes">
                <Nav.Item>View Cakes</Nav.Item>
              </Link>
            </Nav.Container>
            <Nav.Container position="end">
              <Link to="/cart">
                <Nav.Item>
                  <img
                    id="cart"
                    src="https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180817255/107941889-shopping-cart-vector-icon-isolated-on-transparent-background-shopping-cart-logo-concept.jpg"
                  />
                  View Cart
                </Nav.Item>
              </Link>
              <Nav.Item>Hello, {props.user.firstName}</Nav.Item>
              <Nav.Item onClick={props.handleClick}>Logout</Nav.Item>
            </Nav.Container>
          </Nav.Menu>
        ) : (
          <Nav.Container position="end">
            <Nav.Item>Home</Nav.Item>
            <Link to="/cakes">
              <Nav.Item>View Cakes</Nav.Item>
            </Link>
            <Nav.Item>Admin: {props.user.firstName}</Nav.Item>
            <Nav.Item onClick={props.handleClick}>Logout</Nav.Item>
          </Nav.Container>
        )
      ) : (
        <Nav.Menu>
          <Nav.Container>
            <Link to="/login">
              <Nav.Item>Login</Nav.Item>
            </Link>
            <Link to="/signup">
              <Nav.Item>Sign Up</Nav.Item>
            </Link>
            <Link to="/cakes">
              <Nav.Item>View Cakes</Nav.Item>
            </Link>
          </Nav.Container>
          <Nav.Container position="end">
            <Link to="/cart">
              <Nav.Item>View Cart</Nav.Item>
            </Link>
            <Nav.Item>{localStorage.length}</Nav.Item>
            <Nav.Item>Hello, Guest</Nav.Item>
          </Nav.Container>
        </Nav.Menu>
      )}
      <hr />
    </Nav>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user,
    cakes: state.cakes
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
