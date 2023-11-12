import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsComponents = () => {
  const products = useSelector((state) => state.allProducts.products);


  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            {/* Additional content can be added here */}
          </div>
          <div className="content">
            <div className="header">
aaa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponents;
