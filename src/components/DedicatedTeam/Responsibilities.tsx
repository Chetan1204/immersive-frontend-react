import React, { useState } from "react";


const Responsibilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"appinventiv" | "client">("appinventiv");
  const [fadeKey, setFadeKey] = useState<number>(0);

  const appinventivResponsibilities = [
    "Building a dedicated team",
    "Provision of infrastructure & support",
    "Planning required resources",
    "Best delivery practices followed",
    "Planning required resources",
    "Best delivery practices followed",
  ];

  const clientResponsibilities = [
    "Knowledge transfer to stakeholders",
    "Idea validation & market analysis",
    "Providing project vision & goals",
    "Review & feedback cycles",
    "Planning required resources",
    "Best delivery practices followed",
  ];

  const handleTabChange = (tab: "appinventiv" | "client") => {
    setActiveTab(tab);
    setFadeKey((prev) => prev + 1);
  };

  const responsibilities =
    activeTab === "appinventiv" ? appinventivResponsibilities : clientResponsibilities;

  return (
    <section className="responsibilities py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <h2 className="title mb-4">How We Divide Your Project Responsibilities</h2>
          </div>

          {/* Tabs */}
          <div className="col-12">
            <div className="tabs d-flex justify-content-center mb-4">
              <button
                className={`tab ${activeTab === "appinventiv" ? "active" : ""}`}
                onClick={() => handleTabChange("appinventiv")}
              >
                Appinventiv
              </button>
              <button
                className={`tab ${activeTab === "client" ? "active" : ""}`}
                onClick={() => handleTabChange("client")}
              >
                Client
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div key={fadeKey} className="content fade-in">
          <div className="row" style={{ marginTop: "13px" }}>
            {responsibilities.map((item, index) => (
              <div key={index} className="col-md-4 mb-3 d-flex align-items-start">
                <span className="dot">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;
