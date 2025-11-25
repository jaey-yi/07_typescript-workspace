import React from "react";
import "./ProductList.css";
import products from "../data/products.json";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div>
      <h2>상품목록</h2>
      {/** json 데이터 products 를 받아서, 객체를  개별로 ProductItem 컴포넌트에 , 분별자를 product.key 로, 제공할 product 는 json 에서 받은 product 로 제공한다. */}
      <div className="product-list-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
