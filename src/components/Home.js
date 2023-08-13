import React from "react";
import { styled } from "styled-components";
import { Nav } from "./Nav";
import Iksde from "./img/aha.png";

function Home(props) {
  const HomeBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 100vw;
    background-color: #000;
  `;

  const Header = styled.h6`
    display: flex;
    align-items: center;
    text-align: center;
    width: 250px;
    height: 140px;
    margin: 120px auto;
    font-size: 40px;
    /* letter-spacing: 2px; */
    /* word-spacing: 5px; */
    font-weight: 500;
    color: #fff;
    z-index: 12;
    /* text-transform: uppercase; */
    font-family: "Rubik", sans-serif;
  `;
  const Btn = styled.button`
    margin: 0 auto;
    padding: 16px;
    width: 180px;
    height: 50px;
    border-radius: 30px;
    border: none;
    font-size: 16px;
    font-weight: 800;
    font-family: "Rubik", sans-serif;
    background-color: #faff00;
    color: black;
    z-index: 12;
  `;
  const Img = styled.img`
    position: absolute;
    right: 0;
    z-index: 1;
  `;
  const Shadow = styled.div`
    position: absolute;
    right: 0;
    bottom: 38%;
    width: 300px;
    height: 250px;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 95%
    );
  `;
  const SecondShadow = styled.div`
    position: absolute;
    right: 0;
    bottom: 38%;
    width: 300px;
    height: 420px;
    background-color: tomato;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 80%
    );
  `;

  return (
    <>
      <Nav />
      <HomeBox>
        <Header>{props.text}</Header>
        <Btn>Detailed</Btn>
        <Img src={Iksde}></Img>
        <Shadow />
        <SecondShadow />
      </HomeBox>
    </>
  );
}

export default Home;
