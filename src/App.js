import styled from "styled-components";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/cart-provider";

const Wrapper = styled.div`
  background: #FFF5F0;
  width: 100%;
  padding-bottom: 72px;
  @media (width: 80%;
    max-width: 720px) {
    flex-direction: column;
  }
`;

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Wrapper>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </Wrapper>
    </CartProvider>
  );
}

export default App;
