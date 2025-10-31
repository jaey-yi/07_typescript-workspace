import { createContext, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import { cartReducer, initialState } from "./reducer/cartReducer";

export const CartContext = createContext(); // createContext : 상태를 담는 전역 저장소(컨테이너) ,
//따라서 > CartContext = “전역적으로 공유할 데이터의 통로”

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      {/**/}
      <CartContext.Provider value={{ items: state.items, dispatch: dispatch }}>
        <div className="app-container">
          <ProductList />
          <Cart />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
