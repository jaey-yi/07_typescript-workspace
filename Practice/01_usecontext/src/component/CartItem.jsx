import React from "react";
import { CartContext } from "../App";

function CartItem({ item }) {
  /* useContext(CartContext) - Context 안의 데이터를 꺼내오는 Hook - 를 하면, 
     dispatch 를 쓸 수 있다. 
   */
  const { dispatch } = useContext(CartContext);

  // 클릭이벤트시 동작할 내용 정의
  // dispatch {type: , payload: 내용 } - type 으로 식별해서,  payload 의 item.id 를 제공한다?
  const handleItemRemove = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  };
  const handleItemQuantityIncrease = () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item.id });
  };
  const handleItemQuantityDecrease = () => {
    dispatch({ type: "DECREASE_QUANTITY", payload: item.id });
  };
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p className="cart-item-price">{item.price.toLocaleString()}</p>
      </div>

      <div className="cart-item-controls">
        <button
          className="cart-item-quantity-button"
          onClick={handleItemQuantityDecrease}
        >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button
          className="cart-item-quantity-button"
          onClick={handleItemQuantityIncrease}
        >
          +
        </button>

        <button className="cart-item-remove-button" onClick={handleItemRemove}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default CartItem;
