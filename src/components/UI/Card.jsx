import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  background-color: #f4d2ca;
`;

function Card(props) {
  return <StyledCard>{props.children}</StyledCard>;
}

export default Card;
