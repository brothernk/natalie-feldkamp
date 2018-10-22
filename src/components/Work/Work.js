import React from "react";

const Work = () => (
  <div className="page" id="work-pg">
    <p className="cursive">past work</p>
    <h2 className="header">Experience</h2>

    <div className="work-items">
      <div className="position">
        <div className="position-text">
          <p className="company">The Lacek Group</p>
          <p className="job-title">Portfolio Management Associate</p>
          <p className="dates-worked">June 2018 - Present</p>
          <p className="job-description">
            I don't do anything at this jobb. It's a fake job. #thx Carlson.
          </p>
        </div>
      </div>
      <div className="position">
        <div className="position-text">
          <p className="company">Versare Solutions</p>
          <p className="double-title">Marketing Assistant</p>
          <p className="sub-dates">Nov 2017 - Dec 2017</p>
          <p className="double-title">Logistics Coordinator</p>
          <p className="sub-dates">July 2017 - Nov 2017</p>
          <p className="dates-worked">July 2017 - Dec 2017</p>
          <p className="job-description">
            Donec ut porta est, non dictum erat. Ut non magna et lorem efficitur 
            mattis ac in mi. Fusce nunc lectus, dapibus eu molestie non, sollicitudin 
            porta enim. Cras sit amet auctor odio.
          </p>
        </div>
      </div>
      <div className="position">
        <div className="position-text">
          <p className="company">Design Innovations</p>
          <p className="job-title">Business Assistant</p>
          <p className="dates-worked">August 2016 - July 2017</p>
          <p className="job-description">
            Donec ut porta est, non dictum erat. Ut non magna et lorem efficitur 
            mattis ac in mi. Fusce nunc lectus, dapibus eu molestie non, sollicitudin 
            porta enim. Cras sit amet auctor odio.
          </p>
        </div>
      </div>
      <div className="position">
        <div className="position-text">
          <p className="company">Allied Integrated Marketing</p>
          <p className="job-title">Publicity & Promotions Intern</p>
          <p className="dates-worked">May 2016 - Jan 2017</p>
          <p className="job-description">
            Donec ut porta est, non dictum erat. Ut non magna et lorem efficitur 
            mattis ac in mi. Fusce nunc lectus, dapibus eu molestie non, sollicitudin 
            porta enim. Cras sit amet auctor odio.
          </p>
        </div>
      </div>
    </div>
    <a href="#contact-pg"><i className="fas fa-angle-down"></i></a>
  </div>
)

export default Work;