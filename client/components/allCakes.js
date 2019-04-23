import React from 'react'
import {connect} from 'react-redux'
import {getCakes, addingCakesToCart} from '../store/product'
// import {savedCart} from '../store/cart'
import {
  Columns,
  Button,
  Heading,
  Container,
  Section,
  Box
} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'

class AllCakes extends React.Component {
  componentDidMount() {
    this.props.retrieveCakes()
  }

  render() {
    let allCakes = this.props.cakes.cakes

    return allCakes ? (
      <Container>
        <Columns style={{flexWrap: 'wrap'}} ismultiline="true">
          {allCakes.map(cake => (
            <Section key={cake.name}>
              <Box>
                <Columns.Column padding="300px">
                  <Columns>
                    <Link to={`/cakes/${cake.id}`}>
                      <img src={cake.imageUrl} className="allCakeImg" />
                    </Link>
                  </Columns>
                  <Columns>{cake.name}</Columns>

                  <Columns>
                    <Columns.Column>
                      {this.props.isAdmin ? (
                        <Link to={`/cakes/${cake.id}`}>
                          <Button color="danger">View this product</Button>
                        </Link>
                      ) : (
                        <Button
                          color="danger"
                          onClick={() => this.props.addToCart(cake)}
                        >
                          Add to Cart
                        </Button>
                      )}
                    </Columns.Column>
                    <Columns.Column>
                      <Heading size={6}>${cake.price}.00</Heading>
                    </Columns.Column>
                  </Columns>
                </Columns.Column>
              </Box>
            </Section>
          ))}
        </Columns>
      </Container>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCakes)
