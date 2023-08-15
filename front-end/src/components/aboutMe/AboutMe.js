import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div
      className={`
        md:px-16
        lg:px-32
        min-h-[100vh] pt-24`}
    >
      <div>
        <Skills />
      </div>
    
    </div>
  );
};

export default AboutMe;
