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
  html = true,
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
  project,
}) => {
  return (
    <div
      id={project.name}
      className="p-6 bg-primary/5 border-light rounded-lg shadow-lg w-full h-[500px]"
    >
      <h3 className="text-secondary text-xl text-center mb-2">
        {project?.name}
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
      <p>{project?.overview}</p>
      <button className="flex">
        Github{" "}
        <img src={githubLogo} alt="github logo" className="size-6 pl-1" />
      </button>
    </div>
  );
};
