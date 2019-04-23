import React from 'react'
import {connect} from 'react-redux'
import {Columns, Button, Box, Container} from 'react-bulma-components/full'
import {
  getSingleCake,
  deleteCakeProduct,
  addingCakesToCart
} from '../store/product'

class SingleCake extends React.Component {
  async componentDidMount() {
    console.log('In the comp did mount!')
    await this.props.retrieveSingleCake(this.props.match.params.id)
  }

  render() {
    const cake = this.props.singleCake
    return (
      <Container class='singleCake'>
        <Columns>
          <Columns.Column size="one-half" class="singleCakeImg">
            <Box>
              <img
                id="singleCakeImg"
                src={cake.imageUrl}
                className="singleCakeImg"
              />
            </Box>
          </Columns.Column>
          <Box>
            <Columns.Column class="singleCakeInfo">
              <h1>{cake.name}</h1>
              <p>{cake.description}</p>
              <p>Ingredients: {cake.ingredients}</p>
              <p>Price: {cake.price}</p>
              {this.props.isAdmin ? (
                <Button color="danger">
                  {/* ---- to do edit/delete functionality ---*/}
                  DELETE/EDIT THIS CAKE
                </Button>
              ) : (
                <Button
                  color="danger"
                  onClick={() => this.props.addToCart(cake)}
                >
                  Add to Cart
                </Button>
              )}
            </Columns.Column>
          </Box>
        </Columns>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  singleCake: state.cakes.singleCake,
  isAdmin: state.user.isAdmin
})

const mapDispatchToProps = dispatch => ({
  retrieveSingleCake: id => dispatch(getSingleCake(id)),
  addToCart: cake => dispatch(addingCakesToCart(cake)),
  deleteCake: cake => dispatch(deleteCakeProduct(cake))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCake)
