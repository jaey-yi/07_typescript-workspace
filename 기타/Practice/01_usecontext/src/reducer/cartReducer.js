export const initialState = {
  items: [],
};

//cartRedecer 에 필요한 데이터
// >  state 현재상태 객체 , action{type:액션 타입, payload:상태변경용 데이터 }

// cartReducer 의 역할,
// action의 type 분류에 따라, payload 를 재료로 만든 결과를 state에 넣는다.
export function cartReducer(state, action) {
  switch (action.type) {
    // 액션1) 장바구니 추가 (필요데이터: 추가할 상품 객체 {id, name, price})
    case "ADD_TO_CART": {
      // 기존의 아이템으로 추가 되어있는지 check
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      // 1) 장바구니에 이미 존재 > 수량만 증가
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
        // 2) 장바구니에 없는 아이템> 신규 추가
      }

      return;
    }

    // 액션2) 장바구sl 아이템 삭제 (데이터:삭제할 아이템 id)
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    // 액션3) 장바구니 아이템 수량 증가(데이터: 수량 증가할 아이템 id)
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };

    // 액션4) 장바구니 아이템 수량 감소 (데이터 : 수량 감소할 아이템 id)
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: Math.max(item.quantity - 1, 1), //기존수량-1 이랑 1 중에서 큰 값 으로. 왜? 0일시 삭제되는 삭제버튼 따로 있기 때문
              }
            : item
        ),
      };

    // 액션5) 장바구니 전체 삭제

    case "CLEAR_CART": {
      return initialState;
    }
  }
}
