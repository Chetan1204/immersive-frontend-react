import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EngineeringExcellence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const techCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollTrigger: ScrollTrigger | null = null;

    const initScrollTrigger = () => {
      // cleanup if already created
      if (scrollTrigger) {
        scrollTrigger.kill();
        scrollTrigger = null;
      }

      if (!containerRef.current || !leftBoxRef.current || !techCardsRef.current) return;

      if (window.innerWidth > 768) {
        const endValue =
          techCardsRef.current.offsetHeight - leftBoxRef.current.offsetHeight;

        scrollTrigger = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${endValue}`,
          pin: leftBoxRef.current,
          pinSpacing: true,
          scrub: false,
          markers: false,
        });
      }
    };

    // init on mount
    initScrollTrigger();

    // re-init on resize
    window.addEventListener("resize", initScrollTrigger);

    return () => {
      if (scrollTrigger) scrollTrigger.kill();
      window.removeEventListener("resize", initScrollTrigger);
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
          ></Col>
        </Row>

        {/* Bottom Content with ScrollTrigger Pinning */}
        <Row
          ref={containerRef}
          className="industry-sticky-row d-flex align-items-start industry-main-section"
        >
          <Col lg={6}>
            <div className="industry-best left-box" ref={leftBoxRef}>
              <h2 className="best-text">
                What Makes Immersive the Engine Behind Next-Gen eCommerce Development
              </h2>

              <p className="para-text">
                Immersive delivers future-ready eCommerce solutions built for performance,
                scalability, and customer engagement. Our deep technical expertise,
                cross-industry experience, and agile development approach make us a
                trusted partner for businesses aiming to lead in digital commerce.
              </p>
            </div>
          </Col>

          {/* Tech Cards */}
          <Col lg={6} ref={techCardsRef}>
            <div className="tech_card_panel">
              <div className="tech_card">
                <Link
                  to="/"
                  className="tech_card_inner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-class">
                    <img
                      src="assets/images/E-commerce-Icon/specialized-icon.svg"
                      alt="Specialized Cross-Platform Teams"
                      loading="lazy"
                    />
                    <span className="tech_para">
                      <div className="head4"> Specialized Cross-Platform Teams</div>
                      Our teams include domain experts in mobile, web, and cloud
                      development, allowing us to build highly optimized eCommerce
                      platforms for any device, operating system, or user environment.
                    </span>
                  </div>
                </Link>
              </div>

              <div className="tech_card">
                <Link
                  to="/"
                  className="tech_card_inner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-class">
                    <img
                      src="assets/images/E-commerce-Icon/mobile-icon.svg"
                      alt="Mobile-First Shopping Experiences"
                      loading="lazy"
                    />
                    <span className="tech_para">
                      <div className="head4"> Mobile-First Shopping Experiences</div>
                      With fast-loading, touch-optimized design, we create mobile
                      commerce platforms built for performance and scale.
                    </span>
                  </div>
                </Link>
              </div>

              <div className="tech_card">
                <Link
                  to="/"
                  className="tech_card_inner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-class">
                    <img
                      src="assets/images/E-commerce-Icon/business-icon.svg"
                      alt="Business-Aligned Development"
                      loading="lazy"
                    />
                    <span className="tech_para">
                      <div className="head4"> Business-Aligned Development</div>
                      We tailor every platform to support the client's business model,
                      market demands, and customer behavior.
                    </span>
                  </div>
                </Link>
              </div>

              <div className="tech_card">
                <Link
                  to="/"
                  className="tech_card_inner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-class">
                    <img
                      src="assets/images/E-commerce-Icon/enterprise-icon.svg"
                      alt="Enterprise Solutions"
                      loading="lazy"
                    />
                    <span className="tech_para">
                      <div className="head4"> Enterprise-Level Security Standards</div>
                      Each eCommerce platform is developed with built-in security
                      protocols like encryption and GDPR compliance.
                    </span>
                  </div>
                </Link>
              </div>

              <div className="tech_card">
                <Link
                  to="/"
                  className="tech_card_inner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex-class">
                    <img
                      src="assets/images/E-commerce-Icon/ai-icon.svg"
                      alt="AI Solutions"
                      loading="lazy"
                    />
                    <span className="tech_para">
                      <div className="head4">
                        AI-Powered Shopping & Future Interfaces
                      </div>
                      We implement AI-driven features like recommendations,
                      intelligent search, and conversational commerce.
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
