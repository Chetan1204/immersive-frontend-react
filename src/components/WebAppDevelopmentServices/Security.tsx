import React from "react";
import "./Desktop.css";
import { FiChevronRight } from "react-icons/fi";

const SecurityPractices: React.FC = () => {
  return (
    <section className="security-wrapper">
      <div className="security-container">
        <h2 className="security-title">
          Building Resilience with Optimized <br /> Web Security Practices
        </h2>
        <p className="security-subtitle">
          As a custom web application development services provider, we
          understand the importance of safeguarding your data and maintaining
          the integrity of your web application. This is why we prioritize
          security throughout every stage of the software product lifecycle.
        </p>

        <div className="security-cards">
          <div className="security-card">
            <h3>Customer Security</h3>
            <ul>
              <li>Personalized approach</li>
              <li>NDA and SLA guarantees</li>
              <li>Intellectual property policies</li>
            </ul>
          </div>

          <div className="security-card">
            <h3>Data Security</h3>
            <ul>
              <li>Regulatory compliance</li>
              <li>
                <a href="#">Data encryption</a>
              </li>
              <li>Security standards and protocols adherence</li>
            </ul>
          </div>

          <div className="security-card">
            <h3>App Security</h3>
            <ul>
              <li>Automated testing</li>
              <li>Threat modeling</li>
              <li>Attack blocking</li>
            </ul>
          </div>
        </div>

        {/* Centered Button */}
        <div className="security-button-wrapper d-flex justify-content-center">
          <button className="security-btn">
            Learn More <FiChevronRight className="btn-icon" />
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default SecurityPractices;
