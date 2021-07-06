import React from "react";

const Header = (props) => (
  <header>
    <img src="/images/logo.png" alt="logo" />
    <h1>Youtube</h1>
    <input type="text" placeholder="Search..." />
    <button>
      <img src="/images/search.png" alt="search" />
    </button>
  </header>
);

export default Header;
