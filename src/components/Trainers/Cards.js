import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cards(props) {
  const Box = styled.div`
    height: 450px;
    width: 275px;
    background-color: #222222;
    border-radius: 10px;
  `;
  const Img = styled.img`
    width: 240px;
    height: 300px;
    margin: 20px 0;
  `;
  const DespBox = styled.div`
    width: 70vw;
    height: 80px;
  `;
  const IconBox = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  const Name = styled.p`
    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;
  const Icon = styled(FontAwesomeIcon)`
    transition: 0.3s;
    &:hover {
      color: gold;
    }
  `;

  return (
    <>
      <Box>
        <Img src={props.img} />
        <DespBox>
          <Name>{props.name}</Name>
          <IconBox>
            <Icon icon={props.icon} size="2xl" color="white" />
            <Icon icon={props.iconTwo} size="2xl" color="white" />
            <Icon icon={props.iconThree} size="2xl" color="white" />
          </IconBox>
        </DespBox>
      </Box>
    </>
  );
}

export default Cards;
