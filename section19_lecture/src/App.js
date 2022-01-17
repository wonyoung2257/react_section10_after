import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Products from "./components/Shop/Products";
import { fetchCartDate, sendCartData } from "./store/cart-actions";

import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartDate());
  }, [dispatch]);
  //서버에서 장바구니 데이터를 가져올 때 마다 다시 보내는 동작을 한다.
  //데이터를 가져옴으로서 데이터가 cart 내부 데이터가 변하기 때문에 아래 Effect가 다시 실행된다.
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
