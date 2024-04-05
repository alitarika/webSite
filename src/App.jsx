import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import profileImage from "../src/assets/p.png";

const App = () => {
  return (
    <div>
      <Navbar>
        <a className="text-primary flex md:hover:saturate-150" href="#">
          <img
            src={profileImage}
            alt="profile image as icon"
            className="w-7 h-6 mr-2 rounded-full bg-light px-[2px] py-px"
          />
          alitarika.
        </a>
        <div className="flex items-center justify-between w-2/3 md:w-1/3 lg:w-1/4">
          <a href="#about" className="md:hover:text-primary">
            About
          </a>
          <a href="#projects" className="md:hover:text-primary">
            Projects
          </a>
          <a href="#contact" className="md:hover:text-primary">
            Contact
          </a>
        </div>
      </Navbar>
      <Hero />

      <div className="bg-dark w-[100vw] h-[1000px]"></div>
      <div id="about" className="bg-red-500 h-12 w-full"></div>
      <div className="bg-dark w-[100vw] h-[1000px]"></div>
    </div>
  );
};

export default App;
