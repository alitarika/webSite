import { useState, useEffect } from "react";
import { debounce } from "../../utils/debounce.js";
import { H2 } from "../ui/H2";
import { MacbookFrame } from "../ui/MacbookFrame";
import { ProjectCard } from "../ui/ProjectCard";
import wordgameGIF from "../../assets/projectGif/wordgame.gif";
import movieappGIF from "../../assets/projectGif/movieapp.gif";
import blogGIF from "../../assets/projectGif/blog.gif";
import swipeGIF from "../../assets/projectGif/swipe.gif";

export const Projects = () => {
  const [imageSource, setImageSource] = useState(wordgameGIF);

  useEffect(() => {
    const one = document.getElementById("1");
    const two = document.getElementById("2");
    const three = document.getElementById("3");
    const four = document.getElementById("4");

    const handleScroll = () => {
      const onetop = one.getBoundingClientRect().top;
      const twotop = two.getBoundingClientRect().top;
      const threetop = three.getBoundingClientRect().top;
      const fourtop = four.getBoundingClientRect().top;
      const threshold = window.innerHeight * 0.6;

      if (twotop > threshold) {
        setImageSource(wordgameGIF);
      } else if (fourtop <= threshold) {
        setImageSource(swipeGIF);
      } else if (threetop <= threshold) {
        setImageSource(blogGIF);
      } else if (twotop <= threshold) {
        setImageSource(movieappGIF);
      }
    };

    window.addEventListener("scroll", debounce(handleScroll));

    return () => {
      window.removeEventListener("scroll", debounce(handleScroll));
    };
  }, []);
  return (
    <section id="projects" className="max-w-7xl mx-auto w-[90vw] mb-24 lg:mb-0">
      <H2 className="mb-36 sm:mb-24 z-50">Projects</H2>
      <div className="flex flex-col-reverse sm:flex sm:flex-row w-full">
        <div className="flex flex-col sm:pr-6 -mt-52 lg:pb-40 sm:mt-0">
          {projectData.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              id={i + 1}
              {...project.technologiesUsed}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              videoLink={project.videoLink}
            />
          ))}
          {/* Here comes the texts! as map? */}
        </div>
        <div
          id="frameOUT"
          className="sticky top-48 mx-auto  w-full flex sm:block before:content-[''] before:w-full before:h-[280px] before:absolute before:bg-dark before:-top-48 sm:before:content-[] after:content-[''] sm:after:content-[] after:bg-gradient-to-b after:from-dark after:via-dark/60 after:to-transparent after:w-full after:h-24 after:absolute after:top-[88px]"
        >
          <div
            id="frameIN"
            className="sticky top-24 sm:left-0 sm:top-1/2 mx-auto"
          >
            <MacbookFrame imageSource={imageSource} />
          </div>
        </div>
      </div>
    </section>
  );
};

const projectData = [
  {
    name: "Word Game",
    overview:
      "Word Game is a web application designed to help you (and I since I actively use it) learn a language in which you type the word-translation pair first and then you play to choose the correct translation. It works with mongoDB so your word-translation pairs are stored to be used later on. Simply, create your account with a username and a password, navigate to create word page and create at least 4 word pairs to be able to play the game. If you make mistake, the word you were mistaken is stored differently and you can check them afterwards to target your weak words. In the home page you will also see a random word everytime you navigate to or refresh the word with the button. You can also see all of the words you have created in the word list page either alphabetically or creation time.",
    technologiesUsed: {
      html: true,
      css: true,
      js: true,
      react: true,
      tw: true,
      node: true,
      ex: true,
      mongo: true,
    },
    githubLink: "https://github.com/alitarika/wordGame",
    liveLink: "https://word-game-lang.vercel.app/",
  },
  {
    name: "Movie App",
    overview:
      "When deciding on which movie to watch with a friend, it does save time to know what your friend liked to watch, whether or not that person actually watched a particular movie in your mind, what ratings and nominations the movie received, who was the director, who has written the scenario, who played in the movie etc. etc. The website is created so that the people can have the information mentioned above with few clicks. A person registers with a username and a password hence becoming a user. The person searchs for friends with their usernames and sends them friend requests. In the case the friend request is accepted they become friends and able to see each other's comments, ratings, friends and buckets. When someone comments and posts a rating on a movie. Only the friends of that person can see that someone's ratings and comments on their feeds (by pressing the movieapp logo), on that someone's user profile and the movie's page.",
    technologiesUsed: {
      html: true,
      css: true,
      js: true,
      py: true,
      flask: true,
      sql: true,
    },
    githubLink: "https://github.com/alitarika/movieAppCs50",
    videoLink: "https://youtu.be/waOJ3GsgK8Q?si=rHdUIqDw0_VavEte&t=49",
  },
  {
    name: "Blog",
    overview:
      "I developed a blog website as I deemed a good exercise for a MERN stack (MongoDB, Express.js, React.js, Node.js) project. I specifically focused on and set up a robust backend, utilizing Expres.js and MongoDB for data storage. Gained a valuable experience in implementing CRUD (Create, Read, Update, Delete) operations, user authentication and deploying applications, overall enhancing my proficiency as a web developer.",
    technologiesUsed: {
      html: true,
      css: true,
      js: true,
      react: true,
      tw: true,
      node: true,
      ex: true,
      mongo: true,
    },
    githubLink: "https://github.com/alitarika/blogMERN",
    liveLink: "https://blog-mern-sable.vercel.app/",
  },
  {
    name: "Swipe",
    overview:
      "A recreation of the (now) old look of the Swipe built to better grasp the core concepts of the modern raw cascading style sheets.",
    technologiesUsed: {
      html: true,
      css: true,
    },
    githubLink: "https://github.com/alitarika/swipeCSS",
    liveLink: "https://swipe-css.vercel.app/",
  },
];
