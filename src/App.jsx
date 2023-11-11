import React from 'react'
import Header from './Containers/Header.jsx'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import ProductListing from './Containers/ProductListing.jsx'
import ProductsDetails from './Containers/ProductsDetails.jsx'

const App = () => {
  return (
    <Router>
      <Header/>
      <ProductListing/>
    </Router>
  )
}

export default App