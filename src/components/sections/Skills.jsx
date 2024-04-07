import { SkillCard } from "../ui/SkillCard";
import jsLogo from "../../assets/skillSvg/js.svg";
import html5Logo from "../../assets/skillSvg/html5.svg";
import css3Logo from "../../assets/skillSvg/css3.svg";
import twLogo from "../../assets/skillSvg/tw.svg";
import reactLogo from "../../assets/skillSvg/react.svg";
import flaskLogo from "../../assets/skillSvg/flask.svg";
import sqlLogo from "../../assets/skillSvg/sql.svg";
import pythonLogo from "../../assets/skillSvg/python.svg";
import githubLogo from "../../assets/skillSvg/github.svg";
import gitLogo from "../../assets/skillSvg/git.svg";
import sassLogo from "../../assets/skillSvg/sass.svg";
import nodejsLogo from "../../assets/skillSvg/nodejs.svg";
import expressLogo from "../../assets/skillSvg/express.svg";
import mongoLogo from "../../assets/skillSvg/mongo.svg";

export const Skills = () => {
  const skillDataArray = [
    { name: "HTML5", logo: html5Logo },
    { name: "CSS3", logo: css3Logo },
    { name: "JavaScript", logo: jsLogo },
    { name: "Python", logo: pythonLogo },
    { name: "React", logo: reactLogo },
    { name: "Sass", logo: sassLogo },
    { name: "Tailwind", logo: twLogo },
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Node.js", logo: nodejsLogo },
    { name: "Express", logo: expressLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "Flask", logo: flaskLogo },
    { name: "SQL", logo: sqlLogo },
  ];
  return (
    <div>
      {skillDataArray.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};
