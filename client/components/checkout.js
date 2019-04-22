import React from 'react'
import {connect} from 'react-redux'
import {Columns, Button} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'

class Checkout extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <p>Give Us Your Money and We'll Give You Cake</p>
        <Button>Checkout</Button>
      </div>
    )
  }
}

export default Checkout
