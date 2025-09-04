import React from "react";


const WhyHire: React.FC = () => {
  const items = [
    {
      number: "01",
      title: "Tailor-made solutions",
      description:
        "We don’t believe in a one-size-fits-all approach to digital marketing. Our experts take time to understand your organization and customer base well to recommend a strategy peculiar to your business needs.",
    },
    {
      number: "02",
      title: "Data-driven solutions",
      description:
        "At Appinventiv, our each digital marketing solution is driven by thorough research and backed by data. Our experts using state-of-the-art data analytics strategies create up-to-date metrics and generate actionable insights.",
    },
    {
      number: "03",
      title: "Skilled workforce",
      description:
        "Our team of digital marketing experts has the required skills and experience that can lead your business to achieve desired results. From designing websites to running social media campaigns, our specialists know how to create quality service as per your business needs.",
    },
  ];

  return (
    <section className="why-hire">
      <div className="container">
        <div className="row">
          <div className="section-header">
            <h2>
              Why Hire Immersive for Your <br /> Digital Marketing Needs?
            </h2>
          </div>
        </div>

        <div className="row items-row">
          {items.map((item, index) => (
            <div className="col item" key={index}>
              <span className="number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
