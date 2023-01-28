import React from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = () => {
  const items = [
    {
      id: "1",
      title: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      amount: 1,
    },
    {
      id: "2",
      title: "Schnitzel",
      description: " A german specialty!",
      price: 16.01,
      amount: 1,
    },
    {
      id: "3",
      title: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      amount: 1,
    },
    {
      id: "4",
      title: "Green Bowl",
      description: "Healthy...and green...",
      price: 19.99,
      amount: 1,
    },
  ];

  return (
    <Modal onClose={() => {}}>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => (
              <BasketItem
                key={item.id}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </FixedHeightContainer>
        ) : null}
        <TotalAmount price={200.505} onCLose={() => {}} onOrder={() => {}} />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  height: 228px;
  overflow-y: scroll;
`;
