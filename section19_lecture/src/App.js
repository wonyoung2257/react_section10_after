import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Products from "./components/Shop/Products";

import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  //POST는 기존의 데이터 뒤에 데이터를 추가하고 PUT은 데이터를 덮어 씌운다.
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "padding",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      // useEffect에 그대로 async를 사용하면 안되기에 함수를 추가한다.
      const responce = await fetch(
        "https://reatc-http-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!responce.ok) {
        throw new Error("에러발생함");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success!",
          message: "장바구니 데이터 보내는데 성공함",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "장바구니 데이터 보내는데 에러남",
        })
      );
    });
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
