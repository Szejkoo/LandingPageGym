import React from "react";
import { styled } from "styled-components";
import Heading from "../Heading";
import Carousel from "./Carousel";

function About() {
  const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: #000;
  `;
  const Text = styled.p`
    margin: 0 50px;
    color: white;
    text-align: center;
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 161.7%;
  `;
  return (
    <>
      <Box>
        <Heading item="About us" />
        <Text>
          Gym24 is a leading fitness center located near Grushevka metro
          station, offering over 1500 sq. m of space dedicated to
          top-of-the-line workout equipment from leading brands such as Hammer
          Strength, Life Fitness, and TechnoGym.
        </Text>
        <Text>
          Certified trainers at Gym24 provide expert guidance and support to
          develop personalized workout plans tailored to each individual's needs
          and goals.
        </Text>
        <Carousel />
      </Box>
    </>
  );
}

export default About;
