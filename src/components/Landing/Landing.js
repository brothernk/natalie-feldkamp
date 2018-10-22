import React from "react";
import rose from "./natalierose.png";

const Landing = () => (
  <div className="page" id="landing-pg">
    <img className="roselogo" id='rose-logo' src={rose} alt="Rose"></img>
    <h6>hey, I'm</h6>
    <h1>Natalie</h1>
    <a href="#about-pg"><i className="fas fa-angle-down"></i></a>
  </div>
)

export default Landing;