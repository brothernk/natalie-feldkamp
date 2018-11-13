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
          At my current role I build and nurture relationships with internal team members and clients with proactive communication. I develop efficient internal communication by creating and distributing agendas in advance and meeting summaries afterwards. Furthermore, my job involves producing and maintaining project schedules and using program management tools to move projects through the agency in accordance with established processes. I also regularly seek information to understand campaign objectives and client direction while relaying these changes to the team at large.
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
I was responsible for managing marketing materials and content across seven different social media platforms. This task required writing copy and formating graphics. 
My additional position included processing orders and streamlining shipping and transportation logistics on a large scale.
          </p>
        </div>
      </div>
      <div className="position">
        <div className="position-text">
          <p className="company">Design Innovations</p>
          <p className="job-title">Business Assistant</p>
          <p className="dates-worked">August 2016 - July 2017</p>
          <p className="job-description">
          Design Innovations is an Interior Design Firm whose operations span the entire country. Here, I was instrumental in maintaining client relationships by creating presentations and working with the company owner during meetings with clients. I displayed consistent professionalism and communicated at high levels with clients, vendors, and contractors. Furthermore, I contributed to company growth through office management and updating social media outlets.
          </p>
        </div>
      </div>
      <div className="position">
        <div className="position-text">
          <p className="company">Allied Integrated Marketing</p>
          <p className="job-title">Publicity & Promotions Intern</p>
          <p className="dates-worked">May 2016 - Jan 2017</p>
          <p className="job-description">
          I was responsible for building and executing promotional campaigns for upcoming films, specifically Walt Disney Studios. I managed a continuous stream of projects by creating and maintaining relationships with third-party partners for collaboration on promotional events.
          </p>
        </div>
      </div>
    </div>
    <a href="#contact-pg"><i className="fas fa-angle-down"></i></a>
  </div>
)

export default Work;