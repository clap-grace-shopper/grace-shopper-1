import axios from 'axios'
import {runInNewContext} from 'vm'

//Action Type
export const GOT_CAKES = 'GOT_CAKES'

//Action Creator
export const gotCakes = cakes => {
  return {type: GOT_CAKES, cakes}
}

//Thunks
export const getCakes = () => async dispatch => {
  try {
    const {data} = await axios.get('api/cakes') //change depending on route
    dispatch(gotCakes(data))
  } catch (err) {
    console.error(err)
  }
}

//State
const initialState = {
  cakes: []
}

//Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAKES:
      console.log('in the reducer', action.cakes)
      return action.cakes
    default:
      return state
  }
}
