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
      <a href="#work-pg"><i className="fas fa-angle-down"></i></a>
    </div>
  </div>
)

export default Education;