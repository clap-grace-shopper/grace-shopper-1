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
export const loadedCart = () => async dispatch => {
  try {
    const serializedState = await localStorage.getItem('cart')
    console.log('serializedState:', serializedState)

    if (!serializedState) {
      console.log('the if in loadedCart')
      return null
    }

    const parsedState = JSON.parse(serializedState)
    console.log('parsed:', parsedState)
    const hack = parsedState.slice(1)
    dispatch(loadCart(hack))
  } catch (error) {
    console.log('error in loadedState')
    console.log(error)
    return null
  }
}

export const savedCart = state => async dispatch => {
  try {
    let items = [localStorage.getItem('cart')]
    if (!items) {
      localStorage.setItem('cart', [])
    }

    console.log('items:', items)

    const serializedState = JSON.stringify(state)
    console.log('meow:', serializedState)

    items.push(serializedState)
    await localStorage.setItem('cart', items)
    dispatch(saveCart(items))
  } catch (error) {
    console.error(error)
  }
}

//state
const initialState = {
  cartCakes: {}
}

//Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CART:
      return {...state, cart: [...state.cart, action.cart]}
    case LOAD_CART:
      return {...state, cart: [...state.cart, action.cart]}
    default:
      return state
  }
}
