import React, { Component } from "react";
// import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Education from "../../components/Education/Education";
import Work from "../../components/Work/Work";
import Contact from "../../components/Contact/Contact";
import Pictures from "../../components/Pictures/Pictures";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Logo></Logo> */}
        <Navbar></Navbar>
        <Landing></Landing>
        <About></About>
        <Education></Education>
        <Work></Work>
        <Contact></Contact>, document.getElementById("root")
        <Pictures></Pictures>
      </div>
    );
  }
}

export default Home;