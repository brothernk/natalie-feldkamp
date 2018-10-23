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
          Created marketing material for 7 different social media platforms by writing copy and formatting content and graphics. Processed orders and coordinated transportation of freight to streamline shipping and transportation processes through 9 different carriers.
          </p>
        </div>
      </div>
      <div className="position">
        <div className="position-text">
          <p className="company">Design Innovations</p>
          <p className="job-title">Business Assistant</p>
          <p className="dates-worked">August 2016 - July 2017</p>
          <p className="job-description">
          Produced client presentations and assisted owner at client meetings, following-up with errands around town. Displayed consistent professionalism and communicated at high levels with clients, vendors, and contractors. Contributed to company growth through office management and updating social media outlets.
          </p>
        </div>
      </div>
      <div className="position">
        <div className="position-text">
          <p className="company">Allied Integrated Marketing</p>
          <p className="job-title">Publicity & Promotions Intern</p>
          <p className="dates-worked">May 2016 - Jan 2017</p>
          <p className="job-description">
          Built and executed successful promotional campaigns for upcoming films, specifically for Walt Disney Studios. Established relationships with third-party partners for collaboration on promotional events.
          </p>
        </div>
      </div>
    </div>
    <a href="#contact-pg"><i className="fas fa-angle-down"></i></a>
  </div>
)

export default Work;