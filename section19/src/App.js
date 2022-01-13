import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const isCart = useSelector((state) => state.cartButton.isCartToggle);

  return (
    <Layout>
      {isCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
