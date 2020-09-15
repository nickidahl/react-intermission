import React from "react";
import Nav from "./Nav";
import "./Header.scss";

const Header = () => {
  return (
    <header className="myheader">
      <p className="myheader__text">This is the Header with a Nav</p>
      <Nav></Nav>
    </header>
  );
};
export default Header;
