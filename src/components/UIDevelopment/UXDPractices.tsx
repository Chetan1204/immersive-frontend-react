import React from "react";

import { FaSearch, FaCogs, FaCube } from "react-icons/fa";

const  UXDPractices: React.FC = () => {
  return (
    <section className="uxd-section">
      <div className="uxd-header">
        <h2>
          Keep your users at the center of your <br /> design process with our
          UXD practices
        </h2>
        <p>
          We combine our team’s depth of experience in design, our client’s
          intimate knowledge of the industries they serve and insights
          uncovered through the discoveries we make.
        </p>
      </div>

      <div className="uxd-cards">
        <div className="uxd-card">
          <div className="uxd-icon">
            <FaSearch />
          </div>
          <h3>Discover</h3>
          <ul>
            <li>User Research</li>
            <li>User Surveys</li>
            <li>User Personas</li>
            <li>User Stories</li>
          </ul>
        </div>

        <div className="uxd-card">
          <div className="uxd-icon">
            <FaCogs />
          </div>
          <h3>Define</h3>
          <ul>
            <li>Information Architecture</li>
            <li>Site Maps</li>
            <li>Empathy Mapping</li>
            <li>User Journey Map</li>
          </ul>
        </div>

        <div className="uxd-card">
          <div className="uxd-icon">
            <FaCube />
          </div>
          <h3>Deliver</h3>
          <ul>
            <li>Paper Prototyping</li>
            <li>High Fidelity Mockups</li>
            <li>Invision Prototype</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UXDPractices;
