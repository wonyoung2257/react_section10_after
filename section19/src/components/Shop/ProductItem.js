import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/store";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const addCartHandler = () => {
    dispatch(
      cartActions.addItem({ title: title, quantity: 1, price: price, total: 6 })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
