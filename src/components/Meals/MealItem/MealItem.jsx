import React, { useContext } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const StyledItem = styled.li`
  display: flex;
  color: #333652;
  justify-content: space-between;
  margin: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #af2919;
`;

const StyledPrice = styled.div`
  margin-top: 5px;
  font-weight: bold;
  color: #af2919;
  font-size: 23px;
`;

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <StyledItem>
      <div>
        <h3 style={{ margin: "0 0 6px 0", fontSize: "22px", color: "#af2919" }}>
          {props.name}
        </h3>
        <h3 style={{ fontStyle: "italic", fontSize: "16px" }}>
          {props.description}
        </h3>
        <StyledPrice>{price}</StyledPrice>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </StyledItem>
  );
}

export default MealItem;
