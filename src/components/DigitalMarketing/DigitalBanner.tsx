import React from "react";
import "./Desktop.css";
import "./Mobile.css";
import Services from "./Services";
import Clients from "./Clients";
import Campaign from "./Campaign";
import WhyHire from "./WhyHire";
import Counter from "./Counter";
import PresenceBanner from "./PresenceBanner";

const DigitalBanner: React.FC = () => {
  return (
    <>
      <section className="digital-marketing">
        <div className="">
          <div className="row align-items-center justify-content-center">
            {/* Left Content */}
            <div className="col-lg-6 left-content">
              <h1>Digital Marketing Services</h1>
              <p>
                Expand and engage with a wider audience with our complete stack of
                digital marketing services
              </p>
              <button className="btn-primary">Consult our experts</button>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 right-image">
              <img
                src="/assets/images/DigitalMarketing/digital-banner.webp"
                alt="Digital Marketing Team"
              />
            </div>
          </div>
        </div>
      </section>
      <Services/>
      <Clients/>
      <Campaign/>
      <WhyHire/>
      <Counter/>
      <PresenceBanner/>
    </>
  );
};

export default DigitalBanner;
