import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: .3125rem;
  background: #8a2b06;
  color: #fff;
  border-radius: 1.25rem;
  padding: 0.625rem 2rem;
  font-weight: 600;
  line-height: 1.5rem;
  border: none;
  cursor: pointer;

  :hover {
    background: #7e2a0a;
  }

  :active {
    background: #993108;
  }
`;
