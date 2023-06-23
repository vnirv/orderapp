import React from "react";
import styled from "styled-components";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

function Meals() {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default Meals;
