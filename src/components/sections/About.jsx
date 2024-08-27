import { H2 } from "../ui/H2";
import { Skills } from "./Skills";
export const About = () => {
  return (
    <section id="about" className="text-light w-[90vw] max-w-7xl mx-auto">
      <H2>About me</H2>
      <div className="bg-dark w-full mb-24">
        <div className="px-2">
          <p>
            While I started applying for jobs, LinkedIn was persistently
            offering me data analyst jobs as if I knew anything about that
            field. So, I delved into what it actually was until I came across
            the python programming language part. And, that was how I ended up
            typing “Hello World” into my terminal. That moment was my epiphany,
            I was hooked from the get-go, I discovered my passion for{" "}
            <span className="text-secondary">
              making magic out of 0’s and 1’s.
            </span>
            <br />
            <br />
            Over the course of a year, I devoted myself to learning the tools
            and language of software development, earning Udemy, freeCodeCamp,
            coursera certificates, completing courses like CS50x, and crafting
            projects that stretched my skills. Today, I proudly stand as a{" "}
            <span className="text-secondary">
              full-stack web developer
            </span>{" "}
            based in Istanbul, driven by a passion for{" "}
            <span className="text-secondary">problem-solving</span>, web
            development, programming and also coding itself.
            <br />
            <br />
            As a person who is a firm believer of{" "}
            <span className="text-secondary">lifelong learning</span>, I am open
            to embark on a journey of learning in the field and get my hands
            dirty. I am also{" "}
            <span className="text-secondary">
              open to try out new technologies
            </span>
            .
          </p>
        </div>
        <div>
          <h3 className="text-center mt-12 font-bold">Technologies I use</h3>
          <div className="stop mt-6 overflow-hidden py-4 whitespace-nowrap relative before:absolute before:top-0 before:left-0 before:w-[20vw] before:h-full before:z-10 before:bg-gradient-to-r before:from-dark before:via-dark/60 before:to-transparent after:absolute after:top-0 after:right-0 after:w-[20vw] after:h-full after:z-10 after:bg-gradient-to-l after:from-dark after:via-dark/60 after:to-transparent">
            <div className="animate-slide inline-block">
              <Skills />
            </div>
            <div className="animate-slide inline-block">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
