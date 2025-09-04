import React from "react";


const Innovation: React.FC = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: "url('/assets/images/DedicatedTeam/funding_banner.webp')", // replace with your image
      }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                Our Software Projects & Digital Solutions Have
                <br /> Won Millions Of Funding For Leveraging Innovations
                <br /> In Technology.
              </h1>
              <button className="hero-btn">
                See our award winning projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
