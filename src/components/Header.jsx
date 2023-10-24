import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <section className="head">
          <p className="head-link">Home</p>
          <p className="head-link">About</p>
          <p className="head-link">Contact</p>
          <p className="head-link">Register</p>
      </section>
    </>
  );
};

export default Header;
