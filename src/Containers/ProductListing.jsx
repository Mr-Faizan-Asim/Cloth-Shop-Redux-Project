import React, { useEffect } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductsComponents from './ProductsComponents.jsx';
import {setProducts} from "../redux/actions/productActions.js"


const ProductListing = () => {
  const products = useSelector((state)=> state);
  const dispath = useDispatch()
  const fetchProducts = async() => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch((err)=>{
    console.log(err);
    })
    dispath(setProducts(response.data))
  };
  useEffect(()=>{
    fetchProducts();
  },[]) 
  console.log("Products: ", products)
  return (
    <div className= "ui grid container">
      <ProductsComponents/>
    </div>
  )
}

export default ProductListing