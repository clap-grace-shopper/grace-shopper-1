import React from 'react'
import AllCakes from '../client/components/allCakes'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Navbar, Login, Signup} from './components'
import Routes from './routes'
import SingleCake from './components/singleCake'
import Cart from './components/cart'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/cakes" component={AllCakes} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/cakes/:id" component={SingleCake} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  )
}

export default App
