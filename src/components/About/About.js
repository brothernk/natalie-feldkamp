import React from "react";
import headshot from "./headshot.jpg";

const About = () => (
  <div className="page" id="about-pg">
    <div className="left-side">
      <p className="cursive">learn</p>
      <h2 className="header">About Me</h2>
      <hr></hr>
      <p>
        Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Sed in posuere dolor. Donec sodales, 
        lacus facilisis commodo ultricies, leo dui sodales dolor, nec 
        malesuada magna augue quis quam.
      </p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
        posuere cubilia Curae; Duis turpis tortor, rhoncus et placerat vitae, 
        accumsan quis quam. Cras non bibendum lorem. Morbi aliquam nulla at 
        pellentesque malesuada. Aliquam imperdiet, elit id convallis interdum, 
        urna tortor mollis justo, nec laoreet ante augue eget velit.
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