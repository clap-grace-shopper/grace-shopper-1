import React from 'react'
import {connect} from 'react-redux'
import {Columns, Button} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'

class Cart extends React.Component {
  constructor() {
    super()
  }

  render() {
    const arrToMap = Object.values(localStorage)
    return (
      <div>
        {arrToMap.map(cake => {
          let parsed = JSON.parse(cake)
          return (
            <div id="eachCake" key={parsed.id}>
              <p>Cake: {parsed[0]}</p>
              <p>Price: {parsed[1]}</p>
              <img id="shoppingCartImg" src={parsed[2]} />
            </div>
          )
        })}
        <Link to="/checkout">
          <Button color="danger">Checkout</Button>
        </Link>
      </div>
    )
  }
}

export default Cart
