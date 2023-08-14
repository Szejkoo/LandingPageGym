import React from "react";
import { styled } from "styled-components";
import Heading from "../Heading";

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
      </Pass>
    </>
  );
}

export default Trainsers;
