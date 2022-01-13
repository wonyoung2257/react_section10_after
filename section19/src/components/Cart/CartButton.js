import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartButtonActions } from "../../store/store";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(cartButtonActions.toggleCart());
  };

  return (
    <button onClick={cartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
