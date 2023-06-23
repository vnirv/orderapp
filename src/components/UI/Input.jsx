import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1px;
`;
const StyledInput = styled.input`
  width: 50px;
  heigth: 20px;
  border-radius: 15px;
  background: #fff5f0;
  border: 1px solid #af2919;
  font: inherit;
  padding-left: 5px;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  margin-right: 1rem;
  font-style: italic;
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <Wrapper>
        <StyledLabel htmlFor={props.input.id}>{props.label}</StyledLabel>
        <StyledInput ref={ref} {...props.input} />
      </Wrapper>
    </>
  );
});

export default Input;
