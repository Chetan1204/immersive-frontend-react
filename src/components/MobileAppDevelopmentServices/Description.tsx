import React from 'react';


const features = [
  {
    number: '001',
    title: 'Security- and Compliance-First Approach',
    description: (
      <>
        By prioritizing data encryption and strictly following all compliances and regulations
        (such as <span className="link">HIPAA</span>, GDPR, and <span className="link">PCI-DSS</span>), we cater
        to secure mobile application development for our esteemed clients. As strategic leaders in mobile
        development services, we are committed to implementing robust security measures to help businesses
        mitigate risks and establish customer trust, ensuring a more substantial online presence and enhanced
        business agility.
      </>
    ),
  },
  {
    number: '002',
    title: '4.5/5 Average Rating',
    description: (
      <>
        Custom mobile apps developed for our client base witness an exceptional average rating of 4.5/5 at both
        the Google Play Store and App Store. The positive feedback and excellent ratings for our app's
        performance, features, and overall UX are a testimony to the level of perfection we achieve for our
        clients’ projects.
      </>
    ),
  },
  {
    number: '003',
    title: 'Advanced Technical Expertise',
    description: (
      <>
        Our skilled team is highly proficient in an extensive array of technologies, encompassing{' '}
        <span className="link">Business Intelligence</span>, <span className="link">Big Data Analytics</span>,{' '}
        <span className="link">Artificial Intelligence</span>, Cloud Computing, IoT, and more. Each member of
        our team contributes a distinct skill set and valuable experience in offering custom mobile apps
        services to our client base.
      </>
    ),
  },
  {
    number: '004',
    title: 'Faster Delivery',
    description: (
      <>
        With our <span className="link">agile development approach</span>, we consistently deliver projects 57%
        faster compared to traditional delivery methods. Our dedicated mobile software development services and
        efficient project management techniques enable us to accelerate development timelines while maintaining
        high quality and client satisfaction.
      </>
    ),
  },
];

const Description: React.FC = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="title">
          Why Choose Immersive for Custom Mobile Application Development Services?
        </h2>
        <p className="subtitle">
          Immersive is an award-winning native and cross-platform mobile app development service provider.
          With over eight years of experience, an expert team of over 1,200 professionals, and an impressive
          portfolio of over 3,000 successful projects, our team is capable of delivering top-notch
          next-generation mobile apps that guarantee highest ROI.
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
