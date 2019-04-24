import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Columns, Button} from 'react-bulma-components/full'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return name === 'signup' ? (
    <div class="authForm">
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="firstName">
            <small>First Name </small>
          </label>
          <input name="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">
            <small>Last Name </small>
          </label>
          <input name="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="address">
            <small>Address</small>
          </label>
          <input name="address" type="text" />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  ) : (
    <Columns>
      <div className="authForm">
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <div>
          <form method="get" action="/auth/google">
            <a href="/auth/google">login with Google</a>
          </form>
        </div>
      </div>
    </Columns>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      if (evt.target.firstName) {
        const firstName = evt.target.firstName.value
        const lastName = evt.target.lastName.value
        const address = evt.target.address.value
        dispatch(auth(email, password, formName, firstName, lastName, address))
      } else dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
