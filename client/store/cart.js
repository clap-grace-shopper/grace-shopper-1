export const LOAD_CART = 'LOAD_CART'
export const SAVE_CART = 'GOT_CART'

//action creators
export const loadCart = cart => {
  return {type: LOAD_CART, cart}
}

export const saveCart = cart => {
  return {type: SAVE_CART, cart}
}

//thunks
export const loadedCart = () => dispatch => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    const parsedState = JSON.parse(serializedState)
    dispatch(loadCart(parsedState))
  } catch (error) {
    return null
  }
}

export const savedCart = state => async dispatch => {
  try {
    const serializedState = JSON.stringify(state)
    console.log('meow:', serializedState)
    await localStorage.setItem('state', serializedState)
    dispatch(saveCart(serializedState))
  } catch (error) {
    console.error(error)
  }
}

//state
const initialState = {
  cartCakes: []
}

//Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CART:
      return {...state, cart: action.cart}
    case LOAD_CART:
      return {...state, cart: action.cart}
    default:
      return state
  }
}
