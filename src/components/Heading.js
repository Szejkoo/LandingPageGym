import React from "react";
import { styled } from "styled-components";

function Heading(props) {
  const Title = styled.h1`
    display: inline-block;
    margin: 150px auto 50px;
    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;

  return (
    <>
      <Title>{props.item}</Title>
    </>
  );
}

export default Heading;
