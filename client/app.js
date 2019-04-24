import React from 'react'
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {Login, Signup, UserHome, AllCakes, SingleCake, Checkout, Cart} from './components';

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
