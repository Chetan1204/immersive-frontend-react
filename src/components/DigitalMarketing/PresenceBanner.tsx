import React from "react";


const PresenceBanner: React.FC = () => {
  return (
    <section className="digital-banner">
      <img
        src="/assets/images/DigitalMarketing/digital-marketing-banner.webp"
        alt="Social Media Icons"
        className="banner-img"
      />
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="banner-content">
              <h2>
                Ready to improve your digital presence <br />
                for a wider audience reach for your <br />
                next government project?
              </h2>
              <button className="cta-btn">Let's discuss</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceBanner;
