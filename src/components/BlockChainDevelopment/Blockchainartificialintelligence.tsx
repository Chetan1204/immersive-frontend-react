import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Blockchainartificialintelligence: React.FC = () => {
  return (
    <section className="blockchain-ai">
      <div className="blockchain-ai-content">
        <h2>AI-Powered Intelligence for Smarter Blockchain Software Development</h2>
        <p>
          AI-driven automation and analytics are transforming blockchain software into
          intelligent ecosystems. Considering this, our tech experts bridge{" "}
          <a href="#">AI with blockchain</a> to deliver smarter, data-driven applications
          that accelerate decision-making and unlock new business opportunities.
        </p>

        <ul className="blockchain-ai-list">
          <li>
            <FaCheckCircle className="icon" />
            <span>
              <b>Predictive insights enhance decision-making in blockchain systems.</b>
            </span>
          </li>
          <li>
            <FaCheckCircle className="icon" />
            <span>
              <b>Smart contract optimization improves automation and reliability.</b>
            </span>
          </li>
          <li>
            <FaCheckCircle className="icon" />
            <span>
              <b>AI in blockchain apps boosts security, scalability, and efficiency.</b>
            </span>
          </li>
        </ul>

        <button className="blockchain-ai-button">Consult Our AI Experts</button>
      </div>

      <div className="blockchain-ai-image">
        <img
          src="/assets/images/Blockchain/blockchain-banner.webp"
          alt="Blockchain AI"
        />
      </div>
    </section>
  );
};

export default Blockchainartificialintelligence;
