import React from "react";
import styled from "styled-components";

const StyledItem = styled.li`
  display: flex;
  width: 500px;
  height: 80px;
  color: #333652;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 10px 0;
  margin: 10px 0;
`;

const StyledSummary = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPrice = styled.span`
  font-weight: bold;
  color: #8a2b06;
`;

const StyledAmount = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  border: 2px dotted #af2919;
  padding: 5px;
  border-radius: 15px;
  color: #af2919;
`;

const StyledActions = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
`;

const StyledButton = styled.button`
border: 1px;
width:30px;
height:27px;
  border-radius: 12px;
  margin: 4px 100px 10px;
  color: #AF2919;
  background: #FFF5F0;
  font-size: 20px;
  cursor: pointer;
  &: hover,
  &: active{
    color:#FFF5F0;
    background:#FF7E82;
    border-color:#FFF5F0;
  }
  &: focus{
    outline: none;
  }`;

function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <StyledItem>
      <div>
        <h3 style={{ margin: "4px", textAlign: "justify" }}>{props.name}</h3>
        <StyledSummary>
          <StyledPrice>{price}</StyledPrice>
          <StyledAmount style={{}}>x {props.amount}</StyledAmount>
        </StyledSummary>
      </div>
      <StyledActions>
        <StyledButton onClick={props.onRemove}>-</StyledButton>
        <StyledButton onClick={props.onAdd}>+</StyledButton>
      </StyledActions>
    </StyledItem>
  );
}

export default CartItem;
