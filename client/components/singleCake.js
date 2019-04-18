import React from 'react'
import {connect} from 'react-redux'
import {getSingleCake} from '../store/product'
import {Columns, Button} from 'react-bulma-components/full'

class SingleCake extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log('component props:', this.props)
    this.props.retrieveSingleCake(this.props.match.params.id)
  }

  render() {
    let cake = this.props.state
    console.log('single cake props:', this.props.state)
    console.log('localstorename:', localStorage)
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
          <Button
            onClick={() =>
              localStorage.setItem(
                `${cake.name}`,
                JSON.stringify([cake.name, cake.price, cake.imageUrl, cake.id])
              )
            }
            color="danger"
          >
            Add to Cart
          </Button>
        </Columns.Column>
      </Columns>
    )
  }
}

const mapStateToProps = state => ({
  state: state.cakes.singleCake
})

const mapDispatchToProps = dispatch => ({
  retrieveSingleCake: id => dispatch(getSingleCake(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCake)
