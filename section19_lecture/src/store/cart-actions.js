import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartDate = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const responce = await fetch(
        "https://reatc-http-default-rtdb.firebaseio.com/cart.json"
      );
      if (!responce.ok) {
        throw new Error("장바구니 데이터 못 가져왔음");
      }
      const data = responce.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "장바구니 데이터 가져오는데 에러남",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  //이 함수는 reducer 에서 실행되지 않는다 .
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "padding",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
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
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success!",
          message: "장바구니 데이터 보내는데 성공함",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "장바구니 데이터 보내는데 에러남",
        })
      );
    }
  };
};
