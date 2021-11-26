import React from "react";
import { image } from "../data/data";



function About() {
  return (
    <div id="about">
      <h2 style={{textAlign: "center"}}>About Me</h2>
      <p style={{textAlign: "center"}}>Look at me NOW</p>
      <img src={image} alt="I made this" />
    </div>
  )
}

export default About;
