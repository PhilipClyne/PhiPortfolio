import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Expiriment</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            } else {
              // Return null or an empty element to avoid breaking the map
              return null; // Or <></> (empty element)
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            } else {
              // Return null or an empty element to avoid breaking the map
              return null; // Or <></> (empty element)
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
