import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [isCartModal, setIsCartModal] = useState(false);

  const isCartModalHandler = () => {
    setIsCartModal(!isCartModal);
  };

  return (
    <Fragment>
      <Cart isCartModal={isCartModal} onCartHandler={isCartModalHandler} />
      <Header onCartHandler={isCartModalHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
