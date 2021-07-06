import React from 'react';

const Nav = () => (
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
    );

export default Nav;