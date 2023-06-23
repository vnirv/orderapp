import React from "react";
import styled from "styled-components";

const StyledSummary = styled.section`
  text-align: center;
  max-width: 450px;
  width: 90%;
  margin: auto;
  margin-top: -90px;
  position: relative;
  background-color: #333652;
  color: white;
  border-radius: 14px;
  padding: 15px;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function MealsSummary() {
  return (
    <StyledSummary>
      <h1>Delicious Food, Delivered To You</h1>
      <p style={{ marginTop: "10px" }}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p style={{ marginTop: "10px" }}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </StyledSummary>
  );
}

export default MealsSummary;
