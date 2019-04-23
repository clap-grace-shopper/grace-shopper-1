import React from 'react'
import {connect} from 'react-redux'
import {
  Columns,
  Button,
  Heading,
  Box,
  Container
} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'
import {loadCart, deleteCakeFromCart} from '../store/product'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart()
  }
  render() {
    const arrToMap = []
    for (let k in localStorage) {
      if (typeof localStorage[k] === 'string') {
        let cake = JSON.parse(localStorage[k])
        arrToMap.push(cake)
        console.log(arrToMap)
      }
    }
    let count = 0
    let total = 0
    return (
      <Container>
        <Columns.Column>
          {arrToMap.map(cake => {
            count++
            total += Number(cake.price)
            return (
              <Box className="cartBox" key={count} size="is-one-third">
                <Columns size={2}>
                  <Columns.Column align="right">
                    <Columns className="shoppingCartImg">
                      <img id="shoppingCartImg" src={cake.imageUrl} />
                    </Columns>
                  </Columns.Column>
                  <Columns.Column>
                    <Heading size={4}>{cake.name}</Heading>
                    <Heading subtitle size={6}>
                      {cake.description}
                    </Heading>
                    <Heading size={5}>${cake.price}.00</Heading>
                    <Button
                      onClick={() => this.props.deleteFromCart(cake)}
                      color="danger"
                    >
                      Delete
                    </Button>
                  </Columns.Column>
                </Columns>
              </Box>
            )
          })}
          <Columns.Column>
            <Columns align="center">
              <Heading>Total: ${total}.00</Heading>
            </Columns>
            <Columns className="orderLook" align="center">
              <Heading subtitle size={6}>
                Order look good?
              </Heading>
            </Columns>
            <Columns>
              <Link to="/checkout">
                <Button color="danger">Checkout</Button>
              </Link>
            </Columns>
          </Columns.Column>
        </Columns.Column>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cakes.cart
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(loadCart()),
  deleteFromCart: cake => dispatch(deleteCakeFromCart(cake))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
