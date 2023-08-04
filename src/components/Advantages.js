import React from "react";
import Heading from "./Heading";
import { Zdj } from "./svg/Zdj";
import { styled } from "styled-components";

function Advantages() {
  const AdvantagesBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 100vw;
    background-color: #000;
  `;
  const AdvantagesInfo = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: royalblue;
    width: 100vw;
    height: 200px;
  `;
  const AdvInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: 0 50px;
  `;
  const AdvTitle = styled.p`
    font-size: 18px;
    color: white;
    font-family: "Rubik", sans-serif;
  `;
  const AdvDesp = styled.p`
    font-size: 16px;
    color: white;
    font-family: "Rubik", sans-serif;
  `;

  return (
    <>
      <AdvantagesBox>
        <Heading item="Reasons to join" />
        <AdvantagesInfo>
          <Zdj />
          <AdvInfoBox>
            <AdvTitle>15000 sq.m.</AdvTitle>
            <AdvDesp>
              A spacious gym for sports – a safe distance between exercise
              machines
            </AdvDesp>
          </AdvInfoBox>
        </AdvantagesInfo>
      </AdvantagesBox>
    </>
  );
}

export default Advantages;
