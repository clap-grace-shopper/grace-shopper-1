import React from 'react'
import {connect} from 'react-redux'
import {getCakes} from '../store/product'
import {savedCart} from '../store/cart'
import {Columns, Button} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'

class AllCakes extends React.Component {
  componentDidMount() {
    this.props.retrieveCakes()
    // console.log('retrieve cakes')
  }

  render() {
    let allCakes = this.props.cakes.cakes
    let cartCakes = this.props.cart

    console.log('is cakes showing???')
    console.log('what is this:', cartCakes)

    return allCakes ? (
      <Columns style={{flexWrap: 'wrap'}} ismultiline="true">
        <h1> Cake</h1>

        {allCakes.map(cake => (
          <Columns.Column className="column is-one-third" key={cake.name}>
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
              <Button
                onClick={() => {
                  let cartObj = {
                    name: cake.name,
                    price: cake.price,
                    imageUrl: cake.imageUrl,
                    id: cake.id
                  }
                  this.props.setCakes(cartObj)
                }}
                color="danger"
              >
                Add to Cart
              </Button>
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
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  retrieveCakes: () => dispatch(getCakes()),
  setCakes: cartAlias => dispatch(savedCart(cartAlias))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCakes)
