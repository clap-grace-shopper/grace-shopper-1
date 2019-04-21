import React from 'react'
import {connect} from 'react-redux'
import {Columns, Button} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'
import {loadedCart} from '../store/cart'

class Cart extends React.Component {
  constructor() {
    super()
  }

  render() {
    const arrToMap = this.props.getCart()
    console.log('props:', this.props)
    console.log('meow:', this.props.getCart())
    console.log('meowCopy:', arrToMap)
    return (
      <div>Hello</div>
      // <div>
      //   {arrToMap.map(cake => {
      //     let parsed = JSON.parse(cake)
      //     return (
      //       <div id="eachCake" key={parsed.id}>
      //         <p>Cake: {parsed[0]}</p>
      //         <p>Price: {parsed[1]}</p>
      //         <img id="shoppingCartImg" src={parsed[2]} />
      //       </div>
      //     )
      //   })}
      //   <Link to="/checkout">
      //     <Button color="danger">Checkout</Button>
      //   </Link>
      // </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(loadedCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
