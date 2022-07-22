import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { myProjects } from "../assets/dummyData";
import styles from "../styles/Projects.module.css";
import { AiFillGithub, AiOutlineDribbble } from "react-icons/ai";
import Tooltip from "react-simple-tooltip";
function ProjectList({ project }) {
  return (
    <div className={styles.portfolio_projects}>
      <div className={styles.img_wrapper}>
        <img src={project.img} alt="" className={styles.project_img} />
        <div className={styles.project_info}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className={styles.technology_wrapper}>
            {project.technology.map((tech, index) => (
              <p key={index} className={styles.technology}>
                {tech}
              </p>
            ))}
          </div>
          <div className={styles.project_link}>
            <a href={project.liveLink} target="blank">
              <Tooltip content="Website">
                <AiOutlineDribbble />
              </Tooltip>
            </a>
            <a href={project.clientRepo} target="blank">
              <Tooltip content="GitHub">
                <AiFillGithub />
              </Tooltip>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    random: {
      breakpoint: { max: 1400, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min:0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    
  };
  return (
    <div id="projects">
      <div className="project_container">
        <div className="section_header">
          <h2 style={{ paddingBottom: "2rem" }}>
            My Projects <span>....</span>
          </h2>
        </div>
        <div>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {myProjects.map((project, index) => {
              return <ProjectList project={project} key={index} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
