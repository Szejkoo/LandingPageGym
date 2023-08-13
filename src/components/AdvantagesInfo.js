import React from "react";
import { styled } from "styled-components";

function AdvantagesInfo(props) {
  const AdvantagesInfo = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    /* background-color: royalblue; */
    width: 100vw;
    height: 140px;
  `;
  const AdvInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 200px;
    margin: 0 15px;
  `;
  const AdvTitle = styled.p`
    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;
  const AdvDesp = styled.p`
    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 0;
  `;
  const BoxImage = styled.img`
    margin-top: 20px;
    height: 70px;
  `;

  return (
    <>
      <AdvantagesInfo>
        <BoxImage src={props.props} alt="" />

        <AdvInfoBox>
          <AdvTitle>{props.title}</AdvTitle>
          <AdvDesp>{props.description}</AdvDesp>
        </AdvInfoBox>
      </AdvantagesInfo>
    </>
  );
}

export default AdvantagesInfo;
