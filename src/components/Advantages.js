import React from "react";
import Heading from "./Heading";
import AdvantagesInfo from "./AdvantagesInfo";
import icon_eqipment from "./img/icon_ eqipment.png";
import icon_fitness from "./img/icon_ fitness.png";
import icon_line from "./img/icon_line.jpg";
import icon_time from "./img/icon_time.png";
import { styled } from "styled-components";

function Advantages(props) {
  const AdvantagesBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 190vw;
    width: 100vw;
    background-color: #000;
  `;

  return (
    <>
      <AdvantagesBox>
        <Heading item="Reasons to join" />
        <AdvantagesInfo
          title="15000 sq.m."
          description="A spacious gym for sports – a safe distance between exercise
            machines"
          props={icon_line}
        />
        <AdvantagesInfo
          title="More than 200 equipment"
          description="No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym."
          props={icon_eqipment}
        />
        <AdvantagesInfo
          title="4 fitness zones"
          description="From cardio to functional and cycle. Separate area for boxing and mixed martial arts"
          props={icon_fitness}
        />
        <AdvantagesInfo
          title="Round-the-clock operation"
          description="The gym is open 24 hours a day, also works on all holidays and weekends"
          props={icon_time}
        />
      </AdvantagesBox>
    </>
  );
}

export default Advantages;
