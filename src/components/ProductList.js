import React from "react";
import Product from "./Product.js";
function ProductList(productList) {
  console.log(productList);
  return productList.productList.map((product) => {
    return <product productList={(productList, i)} key={i} />;
  });
}

export default ProductList;
