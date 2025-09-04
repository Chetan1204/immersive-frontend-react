import React from "react";


const steps = [
  {
    number: "1",
    text: "Our specialists clarify requirements, prepare the estimations and sign an NDA."
  },
  {
    number: "2",
    text: "We scout, assemble & recruit professionals with skills to suit your project needs."
  },
  {
    number: "3",
    text: "We eliminate risks, set up and improve processes so that your development is flawless."
  },
  {
    number: "4",
    text: "Finally, we begin with product development to shape the final scope of your solution."
  }
];

const ServiceWork: React.FC = () => {
  return (
    <section className="service-work">
      <div className="container">
        <h2 className="section-title">How Our Dedicated Teams Services Work</h2>
        <p className="section-subtitle">
          We are a committed group of professionals from a reputed{" "}
          <a href="#" className="link">
            software development outsource company
          </a>
          , who build expertise in a variety of business domains, share best practices,
          and ensure that the services we provide are of the highest quality.
        </p>

        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <span className="circle">{step.number}</span>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <a href="#" className="cta">
          Reach Our Talent Expert →
        </a>
      </div>
    </section>
  );
};

export default ServiceWork;
