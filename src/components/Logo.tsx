import React from "react";
import "./Logo.css";
import logo from "../controller_white.svg";

const Logo: React.FC = (props) => {
  return (
    <div className="logo">
      <img src={logo} alt="Extra Life" />
    </div>
  );
};

export default Logo;
