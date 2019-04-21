import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import product from './product'
import {cart, loadedCart, savedCart, loadCart} from './cart'

const persistedState = loadedCart()

const reducer = combineReducers({
  user: user,
  cakes: product,
  cart,
  persistedState
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

store.subscribe(() => {
  savedCart({
    cart: loadCart().cart
  })
})

export default store
export * from './user'
