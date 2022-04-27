import React from "react";
import "./Header.css";
import Cta from "./Cta";
import ME from "../../assets/hero.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Subender.</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="My photo" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
