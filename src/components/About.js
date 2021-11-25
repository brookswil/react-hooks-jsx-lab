import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="About">
      <h2 style={{textAlign: "center"}}>About Me</h2>
      <p style={{textAlign: "center"}}>Look at me NOW</p>
      <img src={image}></img>
    </div>
  )
}

export default About;
