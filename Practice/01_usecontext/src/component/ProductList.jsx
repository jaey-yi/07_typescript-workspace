import React from "react";
import "./ProductList.css";
import products from "../data/products.json";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div>
      <h2>상품목록</h2>
      <div className="product-list-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
