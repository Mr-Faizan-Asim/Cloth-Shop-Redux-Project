import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
    
  const renderList = products.data.map((product)=> {
     const {id,title,image,price,category} = product;
        return (
            <div className="four column wide" key={id}>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={image} alt={title}/>
         </div>
          <div className="content">
            <div className="header">
                {title}
            </div>
            <div className="meta price">$ {price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </div>
    </div>
        );
    })

  return (
    <>{renderList}</>
  );
};

export default ProductsComponents;
