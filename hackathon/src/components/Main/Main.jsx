import React from "react";
import "./Main.css";

const Main = ({ imageSrc }) => {
  return (
    <div className="main">
      <h1 className="main_title">M.A.D.S</h1>
       <div className="logo"></div>
      <img src={imageSrc} alt="mads" className="main_image" />
    </div>
  );
};

export default Main;
