import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineProfile } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#main");
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav_wraper}>
        <a
          href="#main"
          className={activeNav === "#main" ? styles.active : ""}
          onClick={() => setActiveNav("#")}
        >
          {" "}
          <AiOutlineHome />{" "}
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? styles.active : ""}
        >
          {" "}
          <AiOutlineUser />{" "}
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? styles.active : ""}
        >
          {" "}
          <AiOutlineProfile />{" "}
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? styles.active : ""}
        >
          {" "}
          <BiMessageSquareDetail />{" "}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
