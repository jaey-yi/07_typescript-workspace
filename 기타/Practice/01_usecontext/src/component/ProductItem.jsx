import React, { useContext } from "react";
import "./ProductItem.css";
import { CartContext } from "../App";

function ProductItem({ product }) {
  const { dispatch } = useContext(CartContext); // useContext(CartContext) =
  /**CartContext 의 구조 
   * <CartContext.Provider value={{ state, dispatch }}>
  {children}
</CartContext.Provider>
   * useContext(CartContext) - Context 안의 데이터를 꺼내오는 Hook - 를 하면, 
     dispatch 를 쓸 수 있다. 
   */
  //dispatch:

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    });
  };

  return (
    <div className="product-item">
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price.toLocaleString()}원</p>
      <button className="product-add-button" onClick={handleAddToCart}>
        장바구니에 추가
      </button>
    </div>
  );
}

export default ProductItem;
