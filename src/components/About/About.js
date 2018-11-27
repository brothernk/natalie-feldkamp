import React from "react";
import headshot from "./headshot.jpg";

const About = () => (
  <div className="page" id="about-pg">
    <div className="left-side">
      <p className="cursive">learn</p>
      <h2 className="header">About Me</h2>
      <hr></hr>
      <p>
      Minneapolis based professional with extensive experience in marketing and a degree from  Carlson School of Business. I have the skills to tackle any project; However, what distinguishes me as a team member is my relentless work ethic and an unique ability to quickly learn new skills on the job. These innate abilities paired with a passion for creative problem solving and a commitment to professionalism allow me to create lasting relationships with clients and coworkers. 
      </p>
      <p>
      When I am not at the office you can find me trying out the latest  Twin Citie’s beer, restaurant, etc. at my grandma’s house for dinner, walking my roommates dog, watching HGTV, at a show, or traveling to a new city. (honestly IDK What to do with this section so just listed all Nat’s hobbies)..
      </p>
      <a href="#education-pg"><i className="fas fa-angle-down"></i></a>
    </div>
    <div className="right-side">
      <div className="img-background"></div>
      <img className="headshot" src={headshot} alt="Natalie Feldkamp"></img>
    </div>
  </div>
)

export default About;