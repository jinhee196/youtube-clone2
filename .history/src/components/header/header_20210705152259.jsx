import React, { memo, useRef } from "react";
import styles from "./header.module.css";

const Header = memo((props) => {
  const inputRef = useRef(); //자동으로 import가 안되는 경우가 왕왕 있으니 주의!!

  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    // console.log(inputValue);
    props.onSearch(inputValue);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <button>
          <i className="fas fa-bars"></i>
        </button>
        <img src="/images/logo.png" alt="logo" />
        <h1 className={styles.header_title}>Youtube</h1>
      </div>
      <div className={styles.searchBox}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          onKeyPress={onKeyPress}
          className={styles.search}
        />
        <button className={styles.searchBtn} onClick={onClick}>
          <img
            src="/images/search.png"
            alt="search"
            className={styles.btnImg}
          />
        </button>
      </div>
    </header>
  );
});

export default Header;
