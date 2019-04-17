import React from 'react'
import AllCakes from '../client/components/allCakes'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Navbar} from './components'
import Routes from './routes'
import SingleCake from './components/singleCake'
import Cart from './components/cart'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes />
        <Switch>
          <Route exact path="/cakes" component={AllCakes} />
          <Route path="/cakes/:id" component={SingleCake} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
