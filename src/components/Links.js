import React from "react";

function Links (prop) {

    return (
    <div>
        <h3> Links </h3>
         <a href={prop.links.github}> {prop.links.github} </a> 
        <a href={prop.links.linkedin}> {prop.links.linkedin} </a>
    </div>
   
    )
}

export default Links