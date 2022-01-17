import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Products from "./components/Shop/Products";
import { sendCartData } from "./store/cart-slice";

import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  //POST는 기존의 데이터 뒤에 데이터를 추가하고 PUT은 데이터를 덮어 씌운다.
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
