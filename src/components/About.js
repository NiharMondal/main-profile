import React from "react";
import { Fade } from "react-reveal";
import styles from "../styles/About.module.css";
const mySkills = [
  "Javascript",
  "React.js",
  "Bootstrap",
  "React-bootstrap",
  "Material UI",
  "Firebase",
  "Node.js",
  "Express.js",
  "MongoDB Atlas",
  "Mongoose",
  "Redux.js",
  "Sass",
  "HTML5",
  "CSS3",
];

const expertise = [
  "Javascript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB Atlas",
  "Mongoose",
  "Firebase",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "React-Bootstrap",
  "Material UI",
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
            <button> Download Resume</button>
          </div>
          <div className="column">
            <div className={styles.expertise}>
              <h2>My Skills</h2>
              <div>
                {mySkills.map((skill, index) => {
                  return (
                    <Fade right>
                      <p key={"skill" + index} className={styles.skill_design}>
                        {skill}
                      </p>
                    </Fade>
                  );
                })}
              </div>
            </div>
            <br />
            <div className={styles.expertise}>
              <h2>Feel free to work with</h2>
              <div>
                {expertise.map((skill, index) => {
                  return (
                    <Fade right>
                      <p key={"skill" + index} className={styles.skill_design}>
                        {skill}
                      </p>
                    </Fade>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
