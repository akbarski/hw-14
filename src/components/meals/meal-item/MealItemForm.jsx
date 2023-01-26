import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";

const MealItemForm = ({ id }) => {
  return (
    <StyledForm>
      <Container>
        <StyledLabel htmlFor={id}>Amount</StyledLabel>
        <StyledInput max={5} min={0} defaultValue={1} type="number" id={id} />
      </Container>
      <Button>
        <PlusIcon />
        Add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Container = styled.div`
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  margin: 0 1.25rem 0 0;
`;

const StyledInput = styled.input`
  width: 3.75rem;
  height: 2rem;
  outline: none;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
  font-weight: 500;
  font-size: 16px;
`;
