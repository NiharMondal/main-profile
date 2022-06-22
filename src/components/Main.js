import styles from "../styles/Home.module.css";
import Zoom from "react-reveal/Zoom";
import Typical from "react-typical";
import avator from "../assets/nihar.png";

import Social from "./Social";
import Navbar from "./Navbar";
const Main = () => {
  const expertise = [
    "I am a ",
    2000,
    "I am a MERN Stack Developer",
    7000,
    "Coding is my passion",
    5000,
    `Everyday I try to get better`,
    5000,
  ];
  return (
    <main id="#">
      <div className={styles.main_section}>
        <Zoom>
          <img src={avator} alt="" className={styles.img} />
        </Zoom>
        <div className={styles.name}>
          <h1>
            <Zoom left cascade>
              Nihar
            </Zoom>
          </h1>
          <h1>
            <Zoom right cascade>
              Mondal
            </Zoom>
          </h1>
        </div>
        <Typical
          steps={expertise}
          loop={Infinity}
          wrapper="p"
          className={styles.experites_text}
        />
      </div>
      <Social />
      <Navbar />
    </main>
  );
};

export default Main;
