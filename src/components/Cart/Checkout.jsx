import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import "./InvalidCheckout.css";

const StyledForm = styled.form`
  margin: 3px 0;
  height: 220px;
  overflow: scroll;
`;

const StyledControl = styled.div`
  margin-bottom: 0.5rem;
  text-align: justify;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 13px;
  text-align: justify;
  color: #333652;
  margin-bottom: 0.25rem;
  display: block;
  &: invalid {
    color: #ca3e51;
  }
`;

const StyledInput = styled.input`
  width: 150px;
  heigth: 20px;
  border-radius: 15px;
  border: 2px solid #af2919;
  font: inherit;
  padding-left: 5px;
`;

const Message = styled.p`
  color: #af2919;
  text-align: justify;
  font-size: 11px;
  margin-top: 3px;
`;

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 5;

function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${formInputsValidity.name ? "" : "invalid"}`;
  const streetControlClasses = `${formInputsValidity.street ? "" : "invalid"}`;
  const postalControlClasses = `${
    formInputsValidity.postalCode ? "" : "invalid"
  }`;
  const cityControlClasses = `${formInputsValidity.city ? "" : "invalid"}`;

  return (
    <StyledForm onSubmit={confirmHandler}>
      <StyledControl className={nameControlClasses}>
        <StyledLabel htmlFor="name"> Your name</StyledLabel>
        <StyledInput type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && (
          <Message>Please enter your name :)</Message>
        )}
      </StyledControl>
      <StyledControl className={streetControlClasses}>
        <StyledLabel htmlFor="street"> Street & adress</StyledLabel>
        <StyledInput type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && (
          <Message>Please enter your adress :)</Message>
        )}
      </StyledControl>
      <StyledControl className={postalControlClasses}>
        <StyledLabel htmlFor="postal"> Postal code</StyledLabel>
        <StyledInput type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <Message>Please enter valid postal code :)</Message>
        )}
      </StyledControl>
      <StyledControl className={cityControlClasses}>
        <StyledLabel htmlFor="city"> City</StyledLabel>
        <StyledInput type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && (
          <Message>Please enter your city :)</Message>
        )}
      </StyledControl>
      <Button
        type="button"
        style={{ color: "#333652" }}
        onClick={props.onCancel}
      >
        Cancel
      </Button>
      <Button type="submit" style={{ margin: "0 0 0 5px" }}>
        Confirm
      </Button>
    </StyledForm>
  );
}

export default Checkout;
