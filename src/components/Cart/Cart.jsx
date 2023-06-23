import React, { useContext, useState } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const StyledCart = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 200px;
  overflow: auto;
  align-items: stretch;
  font-weight: bold;
  font-size: 20px;
  margin: 1px 0;
  display: inline-block;
  color: #333652;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledButton = styled.button`
  border: 1px;
  color: #af2919;
  border-radius: 12px;
  padding: 4px 12px;
  background: #FFF5F0;
  font-size: 15px;
  cursor: pointer;
  &: hover,
  &: active{
    color: #FFF5F0;
    background: #FF7E82;
    border-color:#FFF4ED;
  }
  &: focus{
    outline: none;
  }`;

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const amount = cartCtx.items.reduce(
    (sum, cur) => sum + cur.amount * cur.price,
    0
  );

  const totalAmount = `$${amount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch("https://data-6a110-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions = (
    <Actions>
      <StyledButton style={{ color: "#333652" }} onClick={props.onClose}>
        Close
      </StyledButton>
      {hasItems && <StyledButton onClick={orderHandler}>Order</StyledButton>}
    </Actions>
  );

  const cartModalContent = (
    <>
      <StyledCart>{cartItems}</StyledCart>
      <div style={{ fontWeight: "bold", margin: "20px", fontSize: "22px" }}>
        <span style={{ color: "#333652" }}>Total amount:</span>
        <span style={{ color: "#af2919" }}> {totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = (
    <p style={{ color: "#333652" }}>Sending order 💃</p>
  );

  const didSubmitModalContent = (
    <>
      <p style={{ color: "#333652", marginBottom: "15px" }}>
        Succsessfully sent the order! 🎉
      </p>
      <StyledButton
        style={{
          color: "#333652",
        }}
        onClick={props.onClose}
      >
        Close
      </StyledButton>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}
export default Cart;
