import React from "react";
import TopNavigation from "./components/TopNavigation";
import Home from "./components/Home";
import Advantages from "./components/Advantages";

const Zmienna = "Free trial session with a trainer";

function App(props) {
  return (
    <>
      <TopNavigation />
      <Home text={Zmienna} />
      <Advantages />
    </>
  );
}

export default App;
