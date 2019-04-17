import axios from 'axios'

//Action Type
export const GOT_CAKES = 'GOT_CAKES'
export const GOT_SINGLE_CAKE = 'GOT_SINGLE_CAKE'

//Action Creator
export const gotCakes = cakes => {
  return {type: GOT_CAKES, cakes}
}

export const gotSingleCake = cake => {
  return {type: GOT_SINGLE_CAKE, cake}
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

//State
const initialState = {
  cakes: [],
  singleCake: {}
}

//Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAKES:
      return {...state, cakes: action.cakes}
    case GOT_SINGLE_CAKE:
      return {...state, singleCake: action.cake}
    default:
      return state
  }
}
