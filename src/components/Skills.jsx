import React from "react";

import SkillsProgress from "./SkillsProgress";

const Skills = () => {
  const skillsList = [
    { title: "HTML", fill: 90 },
    { title: "CSS", fill: 90 },
    { title: "JS", fill: 70 },
    { title: "jQuery", fill: 60 },
    { title: "AJAX", fill: 40 },
    { title: "PHP", fill: 50 },
    { title: "MYSQL", fill: 80 },
    { title: "REACT JS", fill: 60 },
    { title: "REACT Native", fill: 30 },
  ];
  return (
    <div className="mySkills secPad dark">
      <h2 className="primary-heading text-center">MY SKILLS</h2>

      <div className="container skillsBar">
        <h3 className="primary-heading">
          PROGRAMMING <span>SKILLS</span>
        </h3>
        <p className="white text-center">
          It takes knowledge, smart work, and dedication to make great ideas
          come to life. I have been helping make great ideas happen for the past
          7 years and am always ready for new challenges.
        </p>
        <div className="row">
            {skillsList.map((mySkills)=> (
                    <SkillsProgress title={mySkills.title} fill={mySkills.fill} />

            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
