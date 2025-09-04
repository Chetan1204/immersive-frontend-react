import React from "react";


const Campaign: React.FC = () => {
  return (
    <section
      className="campaign-section"
      style={{
        backgroundImage: "url('/assets/images/DigitalMarketing/digital-marketing.webp')", // replace with your image path
      }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>
                We helped the ruling party successfully run <br />
                digital campaigns that led to a reach of over <br />
                <span>500 million audience</span> during assembly elections.
              </h2>
              <button className="btn-primary">Let’s discuss your project</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
