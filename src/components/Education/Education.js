import React from "react";
import building from "./building.jpg";
import building3 from "./building3.jpg";

const Education = () => (
  <div className="page" id="education-pg">
    <div className="left-side">
      <img className="building-img" id="bld-one" src={building3} alt="Vienna, Austria"></img>
      <img className="building-img" id="bld-two" src={building} alt="Vienna, Austria"></img>
      <h2 className="img-title">Vienna, Austria</h2>
    </div>
    <div className="right-side">
      <p className="cursive">my</p>
      <h2 className="header">Education</h2>
      <hr></hr>
      <p>
      Carlson School of Management at the University of Minnesota - Twin Cities allowed me to fulfill my life-long dreams of entering the business world. This rigorous program, presented me with countless opportunities for personal and professional growth. By achieving a B.S in Marketing and a Minor in Leadership, I was able to learn business strategies that translated to internships and professional opportunities beyond the classroom
      </p>
      <p>
      My time in Vienna, Austria in the Wirtschaftuniversität Wien school of Business and Economics, complemented my studies by providing me with the opportunity to work collaboratively with people of different cultures and backgrounds. This was instrumental in developing my team building skills as well as  gaining valuable experience in a broad based economic program.
      </p>
      <a href="#work-pg"><i className="fas fa-angle-down"></i></a>
    </div>
  </div>
)

export default Education;