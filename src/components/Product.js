import React from "react";

export default function Product(productList) {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h2>{productList.productList.name}</h2>
        </div>
      </div>
    </div>
  );
}
