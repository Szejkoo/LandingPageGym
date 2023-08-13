import React from "react";
import { styled } from "styled-components";
import Heading from "../Heading";
import Carousel from "./Carousel";

function Membership() {
  const Pass = styled.div`
    display: flex;
    flex-direction: column;
    height: 210vw;
    width: 100vw;
    background-color: #000;
  `;
  return (
    <>
      <Pass>
        <Heading item="Gym membership" />
        <Carousel />
      </Pass>
    </>
  );
}

export default Membership;
