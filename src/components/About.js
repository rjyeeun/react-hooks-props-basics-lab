import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me </h2>

      
      {props.user.bio ? <p>{props.user.bio}</p> : null} 


      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={user.links} />
    </div>
  );
}

export default About;
