import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import StampCard from "./StampCard";
import Gallery from "./gallery"; 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <StampCard />
      <Gallery />
    </div>
  );
};

export default App;
