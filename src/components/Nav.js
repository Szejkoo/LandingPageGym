import React from "react";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import { styled } from "styled-components";
const Color = styled.span`
  display: inline-block;
  color: #faff00;
`;
const Box = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-family: "Bruno Ace SC", cursive;
`;
export const Nav = () => (
  <ResponsiveNavbar
    logo={
      <Box>
        gym<Color>24</Color>
      </Box>
    }
    styles={{
      navigation: {
        fontFamily: "Bruno Ace SC, cursive",
      },
      navigationBarSmall: {
        backgroundColor: "black",
        position: "relative",
      },
      navigationCardSmall: {
        backgroundColor: "black",
      },
    }}
    iconColor="white"
  >
    <ul style={{ color: "white" }}>
      <li>ABOUT</li>
      <li>PROJECTS</li>
      <li>ELEMENTS</li>
      <li>CONTACT</li>
    </ul>
  </ResponsiveNavbar>
);
