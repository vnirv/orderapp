import React, { useContext } from "react";
import styled from "styled-components";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const StyledButton = styled.button`
  border: 1px;
  border-color: #FFF4ED;
  border-radius: 12px;
  margin: 10px 15px 10px;
  padding: 4px;
  color: #af2919;
  background: #FFF4ED;
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &: hover,
  &: active{
    color:#FFF4ED;
    background: #FF7E82;
    border-color:#FFF4ED;
    animation: bump 300ms ease-out;
  }
  &: focus{
    outline: none;
  }

   
  
  
  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  
`;

const StyledIcon = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const StyledBadge = styled.span`
  background-color: #f4d2ca;
  padding: 0.5px 5px;
  border-radius: 25px;
  margin-left: 5px;
  font-family: San Francisco;
  font-weight: bold;
`;

function CartButton({ type = "button", ...props }) {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <StyledButton type={type} {...props} onClick={props.onClick}>
      <StyledIcon>
        <CartIcon />
      </StyledIcon>
      <span>Your cart</span> <StyledBadge>{numberOfItems}</StyledBadge>
    </StyledButton>
  );
}
export default CartButton;
