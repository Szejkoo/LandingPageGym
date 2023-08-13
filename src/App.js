import React from "react";
import TopNavigation from "./components/TopNavigation";
import Home from "./components/Home";
import Advantages from "./components/Advantages";
import Membership from "./components/Offers/Membership";

const Zmienna = "Free trial session with a trainer";

function App(props) {
  return (
    <>
      <TopNavigation />
      <Home text={Zmienna} />
      <Advantages />
      <Membership />
    </>
  );
}

export default App;
