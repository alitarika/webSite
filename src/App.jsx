import React from "react";
import { Wavy } from "./components/ui/Wavy";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar>
        <div>alitarika.</div>
        <div className="flex items-center justify-between w-2/3">
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </Navbar>
      <Wavy containerClassName="max-w-7xl mx-auto pb-40" blur="16"></Wavy>
      <div className="bg-dark w-[100vw] h-[1000px]"></div>
    </div>
  );
};

export default App;
