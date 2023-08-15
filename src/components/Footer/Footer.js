import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faXTwitter,
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const Footer = styled.div`
    height: 55vh;
    width: 100vw;
    background-color: black;
    text-align: center;
  `;
  const Title = styled.h1`
    display: inline-block;
    text-align: center;
    color: #fff;
    font-family: "Rubik", sans-serif;
    font-size: 28px;
    font-weight: 500;
    margin-top: 150px;
  `;
  const Ul = styled.p`
    color: #fff;
    text-align: center;
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 0;
  `;
  const Title2 = styled(Title)`
    margin: 20px;
  `;
  const IconsBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0;
  `;

  return (
    <>
      <Footer>
        <Title>Adress</Title>
        <Ul>Republic of Belarus Dzerzhinsky Avenue 15</Ul>
        <Ul>Minsk city</Ul>
        <Ul>Dzerzhinsky Avenue 15</Ul>
        <Title2>Contact</Title2>
        <Ul>+375(44)-777-24-12</Ul>
        <Ul>gym24@gmail.com</Ul>
        <IconsBox>
          <FontAwesomeIcon icon={faInstagram} size="2xl" color="white" />
          <FontAwesomeIcon icon={faFacebook} size="2xl" color="white" />
          <FontAwesomeIcon icon={faXTwitter} size="2xl" color="white" />
          <FontAwesomeIcon icon={faYoutube} size="2xl" color="white" />
        </IconsBox>
      </Footer>
    </>
  );
}

export default Footer;
