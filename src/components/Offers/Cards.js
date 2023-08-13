import React from "react";
import { styled } from "styled-components";

function Cards(props) {
  const Box = styled.div`
    height: 412px;
    width: 275px;
    background-color: #222222;
    border-radius: 10px;
    &:hover {
      background-color: gold;
    }
    &:hover h3 {
      color: black;
    }
  `;
  const Line = styled.div`
    height: 1px;
    width: 270px;
    margin: 0 auto;
    background-color: black;
  `;
  const BoxInside = styled.div`
    display: flex;
    flex-direction: column;
    height: 295px;
    width: 270px;
    background-color: #222;
    border-radius: 0 0 10px 10px;
    margin: 0 auto 10px;
  `;
  const Title = styled.h3`
    color: white;
    font-weight: bold;
    margin-bottom: 0;
    font-family: "Rubik", sans-serif;
  `;
  const Price = styled.h3`
    color: white;
    font-weight: bold;
    font-family: "Rubik", sans-serif;
  `;
  const Offer = styled.p`
    color: white;
    font-family: "Rubik", sans-serif;
    margin: 12px 0;
  `;
  const Btn = styled.button`
    margin: 0 auto;
    width: 107px;
    height: 30px;
    border-radius: 30px;
    border: none;
    background: #faff00;
    color: #000;
    font-size: 14px;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    cursor: pointer;
  `;
  return (
    <>
      <Box>
        <Title>{props.title}</Title>
        <Price>{props.price}</Price>
        <Line />
        <BoxInside>
          <Offer>{props.offerOne}</Offer>
          <Offer>{props.offerTwo}</Offer>

          <Offer>{props.offerThree}</Offer>
          <Offer>{props.offerFour}</Offer>
          <Btn>Buy</Btn>
        </BoxInside>
      </Box>
    </>
  );
}

export default Cards;
