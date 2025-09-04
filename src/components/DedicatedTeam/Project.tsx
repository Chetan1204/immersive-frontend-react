import React from "react";



const Project: React.FC = () => {
  return (
    <section
      className="project-section"
  style={{ backgroundImage: "url('/assets/images/DedicatedTeam/project.webp')" }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="hero-content">
              <h1>Kickstart Your Dream Project With Us</h1>
              <p>
                We have worked with some of the best innovative ideas and brands
                in the world across industries.
              </p>
              <button className="cta-btn">Initiate a Partnership</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
