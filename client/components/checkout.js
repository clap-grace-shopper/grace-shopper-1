import React from 'react'
import {connect} from 'react-redux'
import {Columns, Button} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'

class Checkout extends React.Component {
  render() {
    return (
      <div id="formDiv">
        <form id="checkoutForm" onSubmit={this.handleSubmit}>
          <div id="name">
            <label>
              First Name:
              <input type="text" name="name" />
            </label>
            <label>
              Last Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
          </div>
          <div id="AddressEmail">
            <h1>Shipping Address</h1>
            <label>
              Street:
              <input type="text" name="address" />
            </label>
            <label>
              City:
              <input type="text" name="address" />
            </label>
            <label>
              State:
              <input type="text" name="address" />
            </label>
            <label>
              Zip Code:
              <input type="text" name="address" />
            </label>
          </div>
          <Link to="/aftercheckout">
            <Button onClick={() => localStorage.clear()}>Place Order</Button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Checkout
