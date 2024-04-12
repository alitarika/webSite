import React, { useEffect, useState } from "react";
import { cn } from "./utils/cn";
import profileImage from "../src/assets/p.png";
import { Navbar } from "./components/Navbar";
import { Socials } from "./components/Socials";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Footer } from "./components/sections/Footer";
import { Contact } from "./components/sections/Contact";

const App = () => {
  const [navbarHighlight, setNavbarHighlight] = useState("");
  const highlightClass =
    "underline underline-offset-8 decoration-double decoration-primary scale-105";

  useEffect(() => {
    const hero = document.getElementById("hero");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");
    const twoThirdScreen = window.innerHeight * 0.66;

    const handleNavbarHighlight = () => {
      const herotop = hero.getBoundingClientRect().top;
      const abouttop = about.getBoundingClientRect().top;
      const projectstop = projects.getBoundingClientRect().top;
      const contacttop = contact.getBoundingClientRect().top;

      if (contacttop <= twoThirdScreen) {
        setNavbarHighlight("contact");
      } else if (projectstop <= twoThirdScreen) {
        setNavbarHighlight("projects");
      } else if (abouttop <= twoThirdScreen) {
        setNavbarHighlight("about");
      } else if (herotop <= twoThirdScreen) {
        setNavbarHighlight("hero");
      }
    };

    window.addEventListener("scroll", handleNavbarHighlight);

    return () => {
      window.removeEventListener("scroll", handleNavbarHighlight);
    };
  }, []);
  return (
    <>
      <Socials />
      <Navbar>
        <a
          className={cn(
            "text-primary flex md:hover:saturate-150 md:transition-all",
            navbarHighlight === "hero" ? highlightClass : ""
          )}
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
            className={cn(
              "md:hover:text-primary md:transition-colors",
              navbarHighlight === "about" ? highlightClass : ""
            )}
          >
            About
          </a>
          <a
            href="#projects"
            className={cn(
              "md:hover:text-primary md:transition-colors",
              navbarHighlight === "projects" ? highlightClass : ""
            )}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={cn(
              "md:hover:text-primary md:transition-colors",
              navbarHighlight === "contact" ? highlightClass : ""
            )}
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
