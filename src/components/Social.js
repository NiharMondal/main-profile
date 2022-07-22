import React from "react";
import styles from "../styles/Social.module.css";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Social = () => {
  return (
    <div className={styles.socialSite}>
      <div className={styles.section}>
        <a
          href="https://web.facebook.com/niharmondal.01/"
          target="blank"
          className={styles.facebook}
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/NiharMondal"
          target="blank"
          className={styles.github}
        >
          <AiFillGithub />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/developer-nihar/"
          className={styles.linkedIn}
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Social;
