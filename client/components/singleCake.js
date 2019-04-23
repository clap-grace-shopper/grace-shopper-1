import React from 'react'
import {connect} from 'react-redux'
import {getSingleCake, addingCakesToCart} from '../store/product'
import {Columns, Button} from 'react-bulma-components/full'

class SingleCake extends React.Component {
  async componentDidMount() {
    console.log('In the comp did mount!')
    await this.props.retrieveSingleCake(this.props.match.params.id)
  }

  render() {
    console.log('PROPS:', this.props)
    const cake = this.props.singleCake
    return (
      <Columns>
        <Columns.Column>
          <img src={cake.imageUrl} className="singleCakeImg" />
        </Columns.Column>
        <Columns.Column>
          <h1>{cake.name}</h1>
          <p>{cake.price}</p>
          <p>{cake.description}</p>
          <p>{cake.ingredients}</p>
          {this.props.isAdmin ? (
            <Button color="danger">
              {/* ---- to do edit/delete functionality ---*/}
              DELETE/EDIT THIS CAKE
            </Button>
          ) : (
            <Button color="danger" onClick={() => this.props.addToCart(cake)}>
              Add to Cart
            </Button>
          )}
        </Columns.Column>
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
  addToCart: cake => dispatch(addingCakesToCart(cake))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCake)
