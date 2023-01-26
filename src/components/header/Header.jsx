import React from "react";
import styled from "styled-components";
import BusketButton from "./BusketButton";

const Header = () => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BusketButton />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.3125rem;
  background: #8a2b06;
  padding: 0 7.5rem;
  align-items: center;
  z-index: 1;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 2.375rem;
  line-height: 3.5625rem;
  color: #ffffff;
  margin: 0;
`;
