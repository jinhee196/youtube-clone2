import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  inputRef = useRef();
  return (
    <header>
      <img src="/images/logo.png" alt="logo" />
      <h1>Youtube</h1>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button>
        <img src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default Header;
