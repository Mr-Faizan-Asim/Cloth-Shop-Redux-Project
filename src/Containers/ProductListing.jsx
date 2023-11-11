import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ProductsComponents from './ProductsComponents.jsx';

const ProductListing = () => {
  return (
    <div className="ui grid container">
      <ProductsComponents/>
    </div>
  )
}

export default ProductListing