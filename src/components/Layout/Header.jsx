import React from "react";
import styled from "styled-components";
import CartButton from "../UI/CartButton";
import MealsImage from "../../assets/meals.jpeg";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #af2919;
  color: #fff4ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;
const StyledImg = styled.div`
  width: 100%;
  height: 50 px;
  z-index: 0;
  overflow: hidden;
`;

const Img = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-40px) translateX(-10px);
`;

function Header(props) {
  return (
    <>
      <StyledHeader>
        <h1>Meals</h1>
        <CartButton onClick={props.onShowCart}></CartButton>
      </StyledHeader>
      <StyledImg>
        <Img src={MealsImage} alt="header" />
      </StyledImg>
    </>
  );
}

export default Header;
