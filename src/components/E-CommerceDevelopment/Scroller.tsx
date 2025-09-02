import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const EngineeringExcellence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const techCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !leftBoxRef.current || !techCardsRef.current) return;
  
    // Calculate the end point dynamically
    const endValue = techCardsRef.current.offsetHeight - leftBoxRef.current.offsetHeight;
  
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top", // Adjust offset if you have a sticky navbar
      end: `+=${endValue}`,
      pin: leftBoxRef.current,
      pinSpacing: true, // Important: keeps layout flow intact
      scrub: false,
      markers: false // Set to true for debug
    });
  
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="py-5 pt-0 next-gen-ecommerce-development">
      <Container>
        {/* Section Heading */}
        <Row>
          <Col
            lg={7}
            md={7}
            sm={12}
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay="0.5s"
          >
            
          </Col>
        </Row>

  
        {/* Bottom Content with ScrollTrigger Pinning */}
        <Row ref={containerRef} className="industry-sticky-row d-flex align-items-start industry-main-section">
           <Col lg={6}>
            <div className="industry-best left-box" ref={leftBoxRef}>
              <h2 className="best-text">
                 What Makes Immersive the Engine Behind Next-Gen eCommerce Development
              </h2>

              <p className="para-text"> Immersive delivers future-ready eCommerce solutions built for performance,
 scalability, and customer engagement. Our deep technical expertise, cross-industry
 experience, and agile development approach  make us a trusted partner for businesses aiming to lead in digital commerce.</p>
             
            </div>
          </Col>

            {/* Tech Cards - This will trigger the pinning */}
            <Col lg={6} ref={techCardsRef}>
              <div className="tech_card_panel">
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/E-commerce-Icon/specialized-icon.svg"
                        alt="Specialized Cross-Platform Teams"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4"> Specialized Cross-Platform Teams</div>
                         Our teams include domain experts in mobile, web, and cloud development, allowing us
                         to build highly optimized eCommerce platforms for any device, operating system, or user environment.
                        Being one of the most exceptional eCommerce app development companies, we ensure seamless functionality across iOS, Android, and web with consistent performance and UI logic.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/E-commerce-Icon/mobile-icon.svg"
                        alt="Mobile-First Shopping Experiences"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4"> Mobile-First Shopping Experiences</div>
                       With fast-loading, touch-optimized design, we create mobile commerce platforms built for performance and scale. As an exceptional eCommerce mobile app development company, we help brands create intuitive mobile applications that engage on-the-go users with frictionless experiences.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/E-commerce-Icon/business-icon.svg"
                        alt="Business-Aligned Development"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4"> Business-Aligned Development</div>
                         An eCommerce application development company like ours tailors every platform to support the client's business model, market demands, and customer behavior. From B2B procurement flows to high-volume B2C storefronts, we build for real-world use cases, not just features.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/E-commerce-Icon/enterprise-icon.svg"
                        alt="Enterprise Solutions"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4"> Enterprise-Level Security Standards</div>
                         As a part of our eCommerce app development services, we prioritize a security-first
                         approach. Each eCommerce platform is developed with built-in security protocols, including end-to-end encryption, secure payment integration, and GDPR-compliant data handling, ensuring trust at every transaction.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/E-commerce-Icon/ai-icon.svg"
                        alt="AI Solutions"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4"> AI-Powered Shopping & Future Interfaces</div>
                         As an eCommerce mobile app development company, we implement AI-driven features such as personalized recommendations, intelligent search, and automated merchandising. We also build for emerging interfaces like voice shopping and conversational commerce, to keep your business future-ready.
                      </span>
                    </div>
                  </Link>
                </div>
                
              </div>
            </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default EngineeringExcellence;