import React from 'react'
import {connect} from 'react-redux'
import {Columns, Button} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'
import {loadCart} from '../store/product'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart()
  }
  render() {
    // const arrToMap = this.props.cart

    // console.log('meow:', this.props.getCart())
    // console.log('meowCopy:', arrToMap)
    const arrToMap = []
    for (let k in localStorage) {
      let cake = JSON.parse(localStorage[k])
      // console.log('this is the cake', cake)
      if (typeof cake === 'object') {
        arrToMap.push(cake)
        // console.log('what is arrToMap', arrToMap)
      }
    }
    console.log('this is arrToMap', typeof arrToMap)
    return (
      // <div>Hello</div>
      <div>
        {arrToMap.map(cake => {
          return (
            <div id="eachCake" key={cake.id}>
              <p>Cake: {cake.name}</p>
              <p>Price: {cake.price}</p>
              <img id="shoppingCartImg" src={cake.imageUrl} />
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

const mapStateToProps = state => ({
  cart: state.cakes.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(loadCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
