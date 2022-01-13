import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartButtonActions } from "../../store/store";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const cartItem = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(cartButtonActions.toggleCart());
  };

  return (
    <button onClick={cartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItem.length}</span>
    </button>
  );
};

export default CartButton;
