import React from "react";


const BusinessRoutes: React.FC = () => {
  return (
    <section className="business-routes">
      <div className="container">
        <div className="business-routes-header">
          <h2>Custom eCommerce Development Routes for Every Business Stage</h2>
          <p>
            As top-rated pioneers in eCommerce app development services, we offer
            flexible development options tailored to your goals. We help you build
            a robust eCommerce application that aligns with your business goals,
            customer needs, and growth strategy without compromising on performance
            or user experience.
          </p>
        </div>

        <div className="content">
          <div className="images">
            <img
              src="assets/images/E-commerce-Icon/mobile-app-banner.webp"
              alt="Mobile App Development"
              className="img-left"
            />
            
          </div>

          <div className="descriptions">
            <div className="item">
              <h3>
                <span className="number">01</span> Mobile-Only App Development
              </h3>
              <p>
                This option is ideal for businesses focused on mobile-first strategies
                or <a href="#">launching an MVP</a>. We help you define the most impactful
                features, select the right tech stack, and develop high-performing mobile
                applications with user-centric design and seamless backend integrations.
              </p>
            </div>

            <div className="item">
              <h3>
                <span className="number">02</span> Mobile + Web Application Development
              </h3>
              <p>
                This path is designed for growing businesses or enterprise-grade brands
                looking to offer a connected, high-performance experience across all
                digital touchpoints. We build seamless ecosystems that span mobile apps,
                web interfaces, and integrated systems—ready for scale, performance, and
                innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessRoutes;
