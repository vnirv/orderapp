import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const StyledForm = styled.form`
  text-align: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    amountInputRef.current.value = 1;
    return props.onAddToCart(enteredAmountNumber);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <Button type="submit">+ Add</Button>
      {!amountIsValid && (
        <p style={{ fontSize: "11px", color: "#AF2919" }}>
          Please enter a valid amount (1-5)
        </p>
      )}
    </StyledForm>
  );
}

export default MealItemForm;
