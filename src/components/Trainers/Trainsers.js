import React from "react";
import { styled } from "styled-components";
import Heading from "../Heading";
import Carousel from "./Carousel";

function Trainsers() {
  const Pass = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: #000;
  `;
  return (
    <>
      <Pass>
        <Heading item="Trainers staff" />
        <Carousel />
      </Pass>
    </>
  );
}

export default Trainsers;
