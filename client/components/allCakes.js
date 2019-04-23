import React from 'react'
import {connect} from 'react-redux'
import {getCakes} from '../store/product'
// import {savedCart} from '../store/cart'
import {Columns, Button} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'
import {addingCakesToCart} from '../store/product'

class AllCakes extends React.Component {
  componentDidMount() {
    this.props.retrieveCakes()
  }

  render() {
    let allCakes = this.props.cakes.cakes

    return allCakes ? (
      <Columns style={{flexWrap: 'wrap'}} ismultiline="true">
        {allCakes.map(cake => (
          <Columns.Column className="column is-one-quarter" key={cake.name}>
            <Columns>
              <Link to={`/cakes/${cake.id}`}>
                <img src={cake.imageUrl} className="allCakeImg" />
              </Link>
            </Columns>

            <Columns>
              <Columns.Column>{cake.name}</Columns.Column>
              <Columns.Column>${cake.price}</Columns.Column>
            </Columns>
            <Columns>
              {this.props.isAdmin ? (
                <Link to={`/cakes/${cake.id}`}>
                  <Button color="danger">View this cake</Button>
                </Link>
              ) : (
                <Button
                  onClick={() => this.props.addToCart(cake)}
                  color="danger"
                >
                  Add to Cart
                </Button>
              )}
            </Columns>
          </Columns.Column>
        ))}
      </Columns>
    ) : (
      'Loading'
    )
  }
}

const mapStateToProps = state => ({
  cakes: state.cakes,
  cart: state.cart,
  isAdmin: state.user.isAdmin
})

const mapDispatchToProps = dispatch => ({
  retrieveCakes: () => dispatch(getCakes()),
  addToCart: cake => dispatch(addingCakesToCart(cake))
  // setCakes: cartAlias => dispatch(savedCart(cartAlias))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCakes)
