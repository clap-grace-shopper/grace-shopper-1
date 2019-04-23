import React from 'react'
import {connect} from 'react-redux'
import {getSingleCake, deleteCakeProduct, addingCakesToCart} from '../store/product'
import {Columns, Button, Box} from 'react-bulma-components/full'


class SingleCake extends React.Component {
  async componentDidMount() {
    console.log('In the comp did mount!')
    await this.props.retrieveSingleCake(this.props.match.params.id)
  }

  render() {
    const cake = this.props.singleCake
    return (
      <Columns>
        <Columns.Column size="one-half">
          <Box>
            <img
              id="singleCakeImg"
              src={cake.imageUrl}
              className="singleCakeImg"
            />
          </Box>
        </Columns.Column>
        <Box>
          <Columns.Column>
            <h1>{cake.name}</h1>
            <p>{cake.price}</p>
            <p>{cake.description}</p>
            <p>{cake.ingredients}</p>
            {this.props.isAdmin ? (
              <Button
                color="danger"
                onClick={() => this.props.deleteCake(cake)}
              >
                {/* ---- to do edit/delete functionality ---*/}
                Delete this cake
              </Button>
            ) : (
              <Button color="danger" onClick={() => this.props.addToCart(cake)}>
                Add to Cart
              </Button>
            )}
          </Columns.Column>
        </Box>
      </Columns>
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
