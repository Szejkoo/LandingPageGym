import React from "react";
import TopNavigation from "./components/TopNavigation";
import Home from "./components/Home";
import Advantages from "./components/Advantages";
import Membership from "./components/Offers/Membership";
import About from "./components/About/About";
import Trainsers from "./components/Trainers/Trainsers";
import Footer from "./components/Footer/Footer";
const Zmienna = "Free trial session with a trainer";

function App(props) {
  return (
    <>
      <TopNavigation />
      <Home text={Zmienna} />
      <Advantages />
      <Membership />
      <About />
      <Trainsers />
      <Footer />
    </>
  );
}

export default App;
