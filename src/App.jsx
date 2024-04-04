import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";

const App = () => {
  return (
    <div>
      <Navbar>
        <a className="text-primary" href="#">
          alitarika.
        </a>
        <div className="flex items-center justify-between w-2/3">
          <a href="#qwe">qwe</a>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </Navbar>
      <Hero />

      <div className="bg-dark w-[100vw] h-[1000px]"></div>
      <div id="qwe" className="bg-red-500 h-12 w-full"></div>
      <div className="bg-dark w-[100vw] h-[1000px]"></div>
    </div>
  );
};

export default App;
