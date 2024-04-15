import { TechnologyCard } from "./TechnologyCard";
import htmlLogo from "../../assets/skillSvg/html5.svg";
import cssLogo from "../../assets/skillSvg/css3.svg";
import jsLogo from "../../assets/skillSvg/js.svg";
import pyLogo from "../../assets/skillSvg/python.svg";
import reactLogo from "../../assets/skillSvg/react.svg";
import sassLogo from "../../assets/skillSvg/sass.svg";
import twLogo from "../../assets/skillSvg/tw.svg";
import nodeLogo from "../../assets/skillSvg/nodejs.svg";
import exLogo from "../../assets/skillSvg/express.svg";
import mongoLogo from "../../assets/skillSvg/mongo.svg";
import sqlLogo from "../../assets/skillSvg/sql.svg";
import flaskLogo from "../../assets/skillSvg/flask.svg";
import githubLogo from "../../assets/skillSvg/github.svg";

export const ProjectCard = ({
  html = false,
  css = false,
  js = false,
  py = false,
  react = false,
  sass = false,
  tw = false,
  node = false,
  ex = false,
  mongo = false,
  sql = false,
  flask = false,
  id,
  githubLink = "https://github.com/alitarika",
  liveLink,
  videoLink,
  project,
}) => {
  return (
    <div
      id={id}
      className="p-6 min-h-[400px] border-light rounded-lg shadow-lg w-full"
    >
      <h3 className="text-secondary text-xl text-center mb-4">
        {project.name}
      </h3>
      <div className="flex flex-row mb-6 flex-wrap">
        {html ? <TechnologyCard src={htmlLogo} tech="HTML5" /> : ""}
        {css ? <TechnologyCard src={cssLogo} tech="CSS3" /> : ""}
        {js ? <TechnologyCard src={jsLogo} tech="JavaScript" /> : ""}
        {py ? <TechnologyCard src={pyLogo} tech="Python" /> : ""}
        {react ? <TechnologyCard src={reactLogo} tech="ReactJS" /> : ""}
        {sass ? <TechnologyCard src={sassLogo} tech="Sass" /> : ""}
        {tw ? <TechnologyCard src={twLogo} tech="TailwindCSS" /> : ""}
        {node ? <TechnologyCard src={nodeLogo} tech="NodeJS" /> : ""}
        {ex ? <TechnologyCard src={exLogo} tech="ExpressJS" /> : ""}
        {mongo ? <TechnologyCard src={mongoLogo} tech="MongoDB" /> : ""}
        {sql ? <TechnologyCard src={sqlLogo} tech="SQL" /> : ""}
        {flask ? <TechnologyCard src={flaskLogo} tech="Flask" /> : ""}
      </div>
      <p className="text-justify">{project.overview}</p>
      <div className="flex flex-row justify-around mt-6">
        <a
          href={githubLink}
          className="flex font-semibold border text-primary border-secondary rounded-lg py-2 px-8 animate-shimmer bg-[linear-gradient(110deg,#070e13,40%,#05ff9f,49%,#05ff9f,51%,#05ff9f,51%,#070e13)] bg-[length:200%_100%] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-0 hover:saturate-200 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github{" "}
          <img src={githubLogo} alt="github logo" className="size-6 pl-1" />
        </a>
        <a
          href={liveLink ? liveLink : videoLink}
          className="font-semibold flex border text-primary border-secondary rounded-lg py-2 px-8 animate-shimmer bg-[linear-gradient(110deg,#070e13,40%,#05ff9f,49%,#05ff9f,51%,#05ff9f,51%,#070e13)] bg-[length:200%_100%] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-0 hover:saturate-200 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          {liveLink ? "Live Link" : "Video Link"}
        </a>
      </div>
    </div>
  );
};
