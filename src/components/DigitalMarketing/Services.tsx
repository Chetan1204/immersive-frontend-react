import React from "react";

import { FaCode, FaPlayCircle, FaImage, FaBroadcastTower,FaPenNib,FaVideo } from "react-icons/fa";

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Design and Development",
      description: (
        <>
          <a href="#" className="link">
            Appinventiv builds custom, mobile-ready, and search engine optimized websites
          </a>{" "}
          that meet the unique needs of your brand and audience and support digital
          marketing campaigns. Our experts perform in-depth site analysis, audience
          analysis, and competitor benchmarking to identify your USPs and set a clear
          path for conversion.
        </>
      ),
    },
    {
      icon: <FaPlayCircle />,
      title: "Social Media Marketing",
      description: (
        <>
          Social media marketing is one of the best ways to provide customers with an
          insider’s view of what is happening in the company. At Appinventiv, our
          experts build custom social media campaigns to engage your users. Starting
          with conducting extensive market research and running social media ads to
          optimizing campaigns based on analytics, our team helps with all.
        </>
      ),
    },
    {
      icon: <FaImage />,
      title: "Brand Management",
      description: (
        <>
          We offer online reputation and brand management services that help you increase
          trust, credibility, and awareness for your business. Our experts use
          innovative strategies to build, sustain, and grow your brand in the digital
          world.
        </>
      ),
    },
    {
      icon: <FaBroadcastTower />,
      title: "Public Relations",
      description: (
        <>
          When it comes to public relations, the term ‘media’ plays a prominent role. We
          create result-oriented PR campaigns to keep your brand image positive and
          increase your visibility across platforms.
        </>
      ),
    },
    {
      icon: <FaPenNib />,
      title: "Content Marketing",
      description: (
        <>
          Content marketing is at the heart of what we do. We create valuable, relevant
          content to attract and engage your target audience, ultimately driving profitable
          customer action. Our team specializes in crafting compelling blog posts, articles,
          infographics, and more to establish your brand as a thought leader in your industry.
        </>
      ),
    },
    {
      icon: <FaVideo />,
      title: "Video Production",
      description: (
        <>
          Video production is a crucial aspect of digital marketing. Our team creates high-quality,
          engaging videos that capture your brand's essence and resonate with your audience.
          From concept development to post-production, we handle all aspects of video creation
          to ensure your message is communicated effectively.
        </>
      ),
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="title">Digital Marketing Services We Offer</h2>
        <p className="subtitle">
          Appinventiv’s digital marketing services are capable of accomplishing all your
          marketing goals. Our pool of services starts from designing and developing
          websites to running full-fledged social media campaigns, managing your brand,
          and more
        </p>

        <div className="row">
          {services.map((service, index) => (
            <div className="col" key={index}>
              <div className="service-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
