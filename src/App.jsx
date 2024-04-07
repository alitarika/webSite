import React from "react";
import profileImage from "../src/assets/p.png";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Footer } from "./components/sections/Footer";
import { Contact } from "./components/sections/Contact";

const App = () => {
  return (
    <>
      <Navbar>
        <a
          className="text-primary flex md:hover:saturate-150 md:transition-all"
          href="#"
        >
          <img
            src={profileImage}
            alt="profile image as icon"
            className="w-7 h-6 mr-2 rounded-full bg-light px-[2px] py-px"
          />
          alitarika.
        </a>
        <div className="flex items-center justify-between w-2/3 md:w-1/3 lg:w-1/4">
          <a
            href="#about"
            className="md:hover:text-primary md:transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="md:hover:text-primary md:transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="md:hover:text-primary md:transition-colors"
          >
            Contact
          </a>
        </div>
      </Navbar>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
