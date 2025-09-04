import React from "react";
import "./Desktop.css";
import Brand from "./Brand";
import DedicatedTeam from "./DedicatedTeam";
import ServiceWork from "./ServiceWork";
import Responsibilities from "./Responsibilities";
import Innovation from "./Innovation";
import Technologies from "./Technologies";
import Faq from "./Faq";
import Project from "./Project";

const Banner: React.FC = () => {
  return (
    <>
      <section
        className="dedicated-team"
        style={{
          backgroundImage:
            "url('/assets/images/DedicatedTeam/dedicated-team.webp')",
        }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 col-12">
                <div className="content">
                  <h1>Dedicated Development Team</h1>
                  <p>
                    Whether your requirement is on-site or off-site, hire a
                    dedicated software development team of highly skilled
                    professionals to empower your technological capabilities.
                  </p>
                  <button className="cta-btn">Get A Dedicated Team</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <DedicatedTeam/>
      <ServiceWork/>
      <Responsibilities/>
      <Innovation/>
      <Technologies/>
      <Faq/>
      <Project/>
    </>
  );
};

export default Banner;
