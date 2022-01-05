import React from "react";

const CartContext = React.createContext({
  //기본데이터는 사용하지 않지만 자동완성을 위해 사용함
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
