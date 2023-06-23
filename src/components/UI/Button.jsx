import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px;
  border-color: #FFF4ED;
  border-radius: 12px;
  margin: 10px 15px 10px;
  padding: 2px;
  color: #af2919;
  background: #FFF4ED;
  font-size: 15px;
  padding: 5px 10px;
  cursor: pointer;

  &: hover,
  &: active{
    color:#FFF4ED;
    background:#FF7E82;
    border-color:#FFF4ED;
  }
  &: focus{
    outline: none;
  }
`;

function Button({ type = "button", ...props }) {
  return <StyledButton onClick={props.onClick} type={type} {...props} />;
}
export default Button;
