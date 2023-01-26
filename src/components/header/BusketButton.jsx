import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/basket-icon.svg";

const BusketButton = ({ count }) => {
  return (
    <StyledButton>
      <BasketIcon />
      <StyledTitle>You Cart</StyledTitle>
      <StyledCounter id="counter">{count || 0}</StyledCounter>
    </StyledButton>
  );
};

export default BusketButton;

const StyledButton = styled.button`
  background: #5a1f08;
  color: #fff;
  border-radius: 1.25rem;
  padding: .75rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2c0d00;
  }

  &:hover > #counter {
    background: #662207;
  }
`;

const StyledTitle = styled.span`
  margin: 0 1.5rem 0 .75rem;
`;

const StyledCounter = styled.span`
  background: #8a2b06;
  border-radius: 1.875rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  padding: .25rem 1.25rem;
`;
