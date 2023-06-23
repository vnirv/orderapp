import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import CustomLoading from "../UI/CustomLoading";

const StyledMeals = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: #2f4858;
`;

const CenterLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const fetchMealsAPI = async () => {
  const response = await fetch(
    "https://data-6a110-default-rtdb.firebaseio.com/meals.json"
  );

  return new Promise((res) => {
    setTimeout(() => res(response), 2000);
  });
};

function AvailableMeals(props) {
  const [meals, setMeals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetchMealsAPI();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <CenterLoader>
        <CustomLoading />
        <p style={{ color: " #2f4858" }}> Loading...</p>
      </CenterLoader>
    );
  }

  if (httpError) {
    return (
      <CenterLoader>
        <CustomLoading />
        <p style={{ color: " #af2919" }}>{httpError}</p>
      </CenterLoader>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <StyledMeals>
      <Card>
        <StyledList>{mealsList}</StyledList>
      </Card>
    </StyledMeals>
  );
}

export default AvailableMeals;
