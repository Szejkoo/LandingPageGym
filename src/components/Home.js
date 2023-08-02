import React from "react";
import { styled } from "styled-components";
import { Nav } from "./Nav";

function Home() {
  const HomeBox = styled.div`
    height: 400px;
    width: 100vw;
    background-color: #000;
  `;
  const Logo = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    z-index: 10;
  `;

  const Header = styled.h6`
    display: flex;
    align-items: center;
    text-align: center;
    width: 250px;
    height: 140px;
    margin: 90px auto;
    font-size: 40px;
    /* letter-spacing: 2px; */
    /* word-spacing: 5px; */
    font-weight: 500;
    color: #fff;
    /* text-transform: uppercase; */
    font-family: "Rubik", sans-serif;
  `;

  return (
    <>
      <Nav />
      <HomeBox>
        <Logo></Logo>
        <Header>Free trial session with a trainer</Header>
      </HomeBox>
    </>
  );
}

export default Home;
