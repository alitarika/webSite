import { SkillCard } from "../ui/SkillCard";
import jsLogo from "../../assets/js.svg";
import html5Logo from "../../assets/html5.svg";
import css3Logo from "../../assets/css3.svg";
import twLogo from "../../assets/tw.svg";
import reactLogo from "../../assets/react.svg";
import flaskLogo from "../../assets/flask.svg";
import sqlLogo from "../../assets/sql.svg";
import pythonLogo from "../../assets/python.svg";
import githubLogo from "../../assets/github.svg";
import gitLogo from "../../assets/git.svg";
import sassLogo from "../../assets/sass.svg";
import nodejsLogo from "../../assets/nodejs.svg";
import expressLogo from "../../assets/express.svg";
import mongoLogo from "../../assets/mongo.svg";

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
