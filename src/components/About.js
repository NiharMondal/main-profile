import React from "react";
import { Fade } from "react-reveal";
import styles from "../styles/About.module.css";
import resume from "../assets/Resume of Nihar Mondal.pdf";
const mySkills = [
  "Javascript",
  "React",
  "TypeScript",
  "Next js",
  "Bootstrap",
  "Tailwind",
  "React-bootstrap",
  "Material UI",
  "Firebase",
  "NodeJs",
  "ExpressJs",
  "Mongoose",
  "MongoDB Atlas",
  "PostgresQl",
  "Redux Toolkit",
  "Sass",
  "HTML5",
  "CSS3",
];

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="section_header">
          <h2>About Me</h2>
          <p>My technical level</p>
        </div>
        <div className="row">
          <div className="column">
            <h3>
              MERN Stack Developer. Built according to the latest web standards.
            </h3>
            <hr />
            <p>
              My name is Nihar Mondal. I specialize in creating beautiful,
              responsive, professional websites, using React.js. Right now I'm
              learning popular framework - NextJs and Typescript.
            </p>
            <button>
              <a href={resume} download>
                {" "}
                Download Resume
              </a>
            </button>
          </div>
          <div className="column">
            <div className={styles.expertise}>
              <h2>My Skills</h2>
              <div>
                <Fade right>
                  {mySkills.map((skill, index) => {
                    return (
                      <p key={index} className={styles.skill_design}>
                        {skill}
                      </p>
                    );
                  })}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
