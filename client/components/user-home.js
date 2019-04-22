import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Columns, Table, Heading, Button} from 'react-bulma-components/full'
import Profile from './table'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  constructor() {
    super()
    this.state = {isHidden: true}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    return (
      <Columns align="center">
        <Columns.Column>
          <Heading> Welcome, {this.props.user.firstName}! </Heading>
          <Columns.Column>
            <Heading subtitle size={6}>
              Your Profile Information
            </Heading>
            <Button onClick={this.handleClick}>Edit Profile</Button>

            <Profile props={this.props} isHidden={this.state.isHidden} />
          </Columns.Column>
        </Columns.Column>
      </Columns>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  email: state.user.email,
  user: state.user
})

export default connect(mapState)(UserHome)
