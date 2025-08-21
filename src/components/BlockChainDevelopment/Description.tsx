import React from 'react';
import "./Desktop.css";

const features = [
  {
    number: '001',
    title: 'Certified Experts',
    description: (
      <>
        Count on the team of 500+ certified blockchain experts who have the experience of
        working on a multitude of blockchain projects, fulfilling the needs of a varied
        set of industries and businesses.
      </>
    ),
  },
  {
    number: '002',
    title: ' Client-Focused Approach',
    description: (
      <>
        As a leading blockchain development services company, our focus lies not just in building products but also in analyzing all risks while providing solutions. Our USP lies in adding value to your project by presenting innovative ideas.
      </>
    ),
  },
  {
    number: '003',
    title: ' 24/7 Monitoring & Proactive Support',
    description: (
      <>
        Compliance-Assured Products We build blockchain products that meet all regulatory requirements. Be it ST-20, AML, , GDPR, PCI DSS, or PSD2, we ensure that your app is absolutely compliance-ready.
      </>
    ),
  },
  {
    number: '004',
    title: '24/7 Support',
    description: (
      <>
         A software product requires regular maintenance and upgrade post deployment. Leverage our 24*7 support blockchain services to prevent glitches at all times and scale your app as per user requirements.
      </>
    ),
  },
];

const Description: React.FC = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="title">
          Why Choose Immersive as Your Custom Blockchain App Development Company?
        </h2>
        <p className="subtitle">
          As a custom blockchain application development company having an experience of handling hundreds of blockchain projects with varied complexity levels, we offer the expertise to convert your ideas into practical, secure and scalable solutions. Here’s why we are the perfect fit as your custom blockchain development company:
        </p>

        <div className="features">
          {features.map((item, index) => (
            <div className="feature-box" key={index}>
              <span className="feature-number">{item.number}</span>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;
