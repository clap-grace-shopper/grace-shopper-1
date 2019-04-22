import axios from 'axios'

//Action Type
export const GOT_CAKES = 'GOT_CAKES'
export const GOT_SINGLE_CAKE = 'GOT_SINGLE_CAKE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const GET_CART = 'GET_CART'

//Action Creator
export const gotCakes = cakes => {
  return {type: GOT_CAKES, cakes}
}

export const gotSingleCake = cake => {
  return {type: GOT_SINGLE_CAKE, cake}
}

export const addCakeToCart = cake => {
  return {type: ADD_TO_CART, cake}
}

export const getCart = () => {
  return {type: GET_CART}
}
//Thunks
export const getCakes = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cakes')
    dispatch(gotCakes(data))
  } catch (err) {
    console.error(err)
  }
}

export const getSingleCake = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/cakes/${id}`)
    dispatch(gotSingleCake(data))
  } catch (err) {
    console.error(err)
  }
}

export const addingCakesToCart = cake => dispatch => {
  try {
    dispatch(addCakeToCart(cake))
    localStorage.setItem(cake, cake)
  } catch (err) {
    console.error(err)
  }
}

export const loadCart = () => dispatch => {
  try {
    dispatch(getCart())
  } catch (error) {
    console.log('error in loadedState')
  }
}

//State
const initialState = {
  cakes: [],
  singleCake: {},
  cart: []
}

//Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAKES:
      return {...state, cakes: action.cakes}
    case GOT_SINGLE_CAKE:
      return {...state, singleCake: action.cake}
    case ADD_TO_CART:
      console.log('is my action to add cart working?', {
        ...state,
        cart: [...state.cart, action.cake]
      })
      return {...state, cart: [...state.cart, action.cake]}
    case GET_CART:
      return {...state}

    default:
      return state
  }
}
