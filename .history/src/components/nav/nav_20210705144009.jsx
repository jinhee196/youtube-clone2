import React from "react";
import styles from "./nav.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <button className={styles.home}>
      <i className="fas fa-home"></i>
    </button>
    <button className={styles.compass}>
      <i className="fas fa-compass"></i>
    </button>
    <button className={styles.video}>
      <i className="fas fa-video"></i>
    </button>
    <button className={styles.cabinet}>
      <i className="fas fa-layer-group"></i>
    </button>
  </nav>
);

export default Nav;
