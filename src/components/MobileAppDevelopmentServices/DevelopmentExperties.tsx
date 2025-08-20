import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);

const DevelopmentExperties: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const techCardsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap's lg breakpoint
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    if (isMobile || !containerRef.current || !leftBoxRef.current || !techCardsRef.current) return;
  
    // Calculate the end point dynamically
    const endValue = techCardsRef.current.offsetHeight - leftBoxRef.current.offsetHeight;
  
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${endValue}`,
      pin: leftBoxRef.current,
      pinSpacing: true,
      scrub: false,
      markers: false
    });
  
    return () => {
      scrollTrigger.kill();
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  return (
    <section className="py-5 development-expertise">
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
            <div className="mb-5">
              <h2 className="section-title">
             Industries We Serve
              </h2>
              <span className="section-subtitle">
                Explore our expertise across various industries, delivering tailored solutions to meet unique business needs.
              </span>
            </div>
          </Col>
        </Row>

        {/* Services Grid */}
        <Row className="d-flex align-items-center row-gap-4">
          {[
            {
              icon: "healthcare-indus-icon.svg",
              title: "Healthcare",
              desc: "Revolutionize patient care with our healthcare app development services, enhancing access to medical information and improving healthcare delivery.",
            },
            {
              icon: "finance-indus-icon.svg",
              title: "Finance",
              desc: "Secure and innovative finance app development services to streamline banking and investment processes, boosting user engagement and trust.",
            },
            {
              icon: "education-indus-icon.svg",
              title: "Education",
              desc: "Transformative education app development services that facilitate interactive learning and remote education, connecting students and educators worldwide.",
            },
            {
              icon: "on-demand-indus-icon-new.svg",
              title: "On-Demand",
              desc: "Custom on-demand app development services designed to offer seamless booking experiences, from transportation to home services.",
            },
            {
              icon: "entertainment-indus-icon-new.svg",
              title: "Entertainment",
              desc: "Engaging entertainment app development services that captivate audiences with streaming, gaming, and interactive media solutions.",
            },
            {
              icon: "politics-indus-icon.svg",
              title: "Government",
              desc: "Reliable government app development services to improve civic engagement and provide public sector solutions that enhance citizen access to services.",
            },
            {
              icon: "restaurant-indus-icon.svg",
              title: "Restaurant",
              desc: "Tailored restaurant app development services to enhance dining experiences with features like online ordering, table reservations, and customer loyalty.",
            },
            {
              icon: "ecommerce-indus-icon.svg",
              title: "eCommerce",
              desc: "Advanced eCommerce app development services that drive sales through personalized shopping experiences and seamless transaction processes.",
            },
          ].map((item, idx) => (
            <Col
              key={idx}
              lg={3}
              md={3}
              sm={12}
              className="wow animate__animated animate__fadeInUp"
            >
              <div className="engineering-web-box">
                <div className="engineering-icon">
                  <img
                    src={`assets/images/mobiledevelopmentservices/${item.icon}`}
                    alt={item.title}
                  />
                </div>
                <div className="engineering-web-content">
                  <h6 className="section-title">{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

      
      </Container>
    </section>
  );
};

export default DevelopmentExperties;