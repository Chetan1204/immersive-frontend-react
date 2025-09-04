import React from "react";

import { FiUsers, FiFileText, FiClock, FiGlobe, FiCode, FiBox, FiSmartphone, FiHeadphones } from "react-icons/fi";
import { MdOutlineArchitecture } from "react-icons/md";

const features = [
  { icon: <FiUsers />, title: "Multiple Domain Expertise" },
  { icon: <FiFileText />, title: "Quality Project Management" },
  { icon: <FiClock />, title: "Real-Time Progress Monitoring" },
  { icon: <FiClock />, title: "Time-Zone Compatibility" },
  { icon: <MdOutlineArchitecture />, title: "Fully Equipped Infrastructure" },
  { icon: <FiCode />, title: "Cost-Effective Development" },
  { icon: <FiBox />, title: "Dedicated Delivery Management" },
  { icon: <FiGlobe />, title: "Global Management Standards" },
  { icon: <FiSmartphone />, title: "650+ Technology Experts" },
  { icon: <FiHeadphones />, title: "24x7 Support Services" },
];

const DedicatedTeam: React.FC = () => {
  return (
    <section className="dedicated-team-section">
      <div className="container">
        <h2>Why Should You Hire Our Dedicated Development Team</h2>
        <p>
          Our dedicated development team provides quality IT services and mindful guidance in the
          technical realm.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DedicatedTeam;
