import React from 'react'
import {Columns, Table, Button, Form} from 'react-bulma-components/full'
import {connect} from 'react-redux'
import {updateProfile} from '../store/user'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.props.user.firstName,
      lastName: this.props.props.user.lastName,
      email: this.props.props.user.email,
      address: this.props.props.user.address,
      id: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      id: this.props.props.user.id
    })
  }

  render() {
    let user = this.props.props.user
    // console.log(this.props.props.user)
    return (
      <div>
        <Table size="is-narrow">
          <thead>
            <tr>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="is-selected"> First Name </th>
              {this.props.isHidden ? (
                <td>{user.firstName}</td>
              ) : (
                <Form.Input
                  placeholder="First Name"
                  type="text"
                  color="success"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
              )}
            </tr>
            <tr>
              <th className="is-selected"> Last Name </th>
              {this.props.isHidden ? (
                <td>{user.lastName}</td>
              ) : (
                <Form.Input
                  placeholder="Last Name"
                  type="text"
                  color="success"
                  name="lastName"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
              )}
            </tr>
            <tr>
              <th className="is-selected"> Email </th>
              {this.props.isHidden ? (
                <td>{user.email}</td>
              ) : (
                <Form.Input
                  placeholder="Email Address"
                  type="text"
                  color="success"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              )}
            </tr>
            <tr>
              <th className="is-selected"> Address </th>
              {this.props.isHidden ? (
                <td>{user.address}</td>
              ) : (
                <Form.Input
                  placeholder={user.address}
                  type="text"
                  color="success"
                  name="address"
                  onChange={this.handleChange}
                  value={this.state.address}
                />
              )}
            </tr>
          </tbody>
        </Table>
        {this.props.isHidden ? null : (
          <Button
            align="center"
            onClick={() => this.props.updateProfile(this.state)}
          >
            Submit Changes
          </Button>
        )}
      </div>
    )
  }
}

const mapStateToDispatch = dispatch => ({
  updateProfile: state => dispatch(updateProfile(state))
})

export default connect(null, mapStateToDispatch)(Profile)
