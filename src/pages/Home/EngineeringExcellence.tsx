
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
    <section className="py-5 pt-0 engineering-excellence">
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
                Navigate The Digital Frontier With Our Engineering Excellence
              </h2>
            </div>
          </Col>
        </Row>

        {/* Services Grid */}
        <Row className="d-flex align-items-center row-gap-4">
          {[
            {
              icon: "mobile-app-development-icon.svg",
              title: "Mobile App Development",
              desc: "We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.",
              delay: "0.2s",
            },
            {
              icon: "software-development-icon.svg",
              title: "Software Development",
              desc: "From custom development to system upgrades, we craft software that enhances operational efficiency and drives innovation.",
              delay: "0.3s",
            },
            {
              icon: "digital-transformation-icon.svg",
              title: "Digital Transformation",
              desc: "We help businesses stay competitive by transforming legacy systems with modern, digital-first solutions that drive growth.",
              delay: "0.4s",
            },
            {
              icon: "ideation-and-design-strategy-icon.svg",
              title: "Ideation & Design Strategy",
              desc: "Our strategic ideation and design processes ensure your digital products are functional and user-centric.",
              delay: "0.5s",
            },
            {
              icon: "it-consulting-icon.svg",
              title: "IT Consulting",
              desc: "We help navigate complex tech decisions, aligning IT strategies with business goals.",
              delay: "0.2s",
            },
            {
              icon: "devops-icon-home.svg",
              title: "DevOps",
              desc: "Streamline development and operations to accelerate project delivery and improve product quality.",
              delay: "0.3s",
            },
            {
              icon: "devops-icon-home.svg",
              title: "Cloud Managed Services",
              desc: "Optimize and secure your cloud infrastructure while reducing operational burdens.",
              delay: "0.4s",
            },
          ].map((item, idx) => (
            <Col
              key={idx}
              lg={3}
              md={3}
              sm={12}
              className="wow animate__animated animate__fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="engineering-box">
                <div className="engineering-icon">
                  <img
                    src={`assets/images/icon/${item.icon}`}
                    alt={item.title}
                  />
                </div>
                <div className="engineering-content">
                  <h6 className="section-title">{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}

          {/* CTA Box */}
          <Col
            lg={3}
            md={3}
            sm={12}
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="our_services_cta">
              <div className="common__btn hv_blue hv_wht">
                <a href="#" target="_blank" className="btn_line btn-effect">
                  <span>Our Services</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Content with ScrollTrigger Pinning */}
        <Row ref={containerRef} className="industry-sticky-row d-flex align-items-start industry-main-section">
           <Col lg={6}>
            <div className="industry-best left-box" ref={leftBoxRef}>
              <h2 className="best-text">
                We Create New Solutions And Transform Existing Ones With
                Technologies That Beat Industry-Best Timelines
              </h2>
              <div className="industry_cta">
                <img
                  src="assets/images/icon/icon-up.svg"
                  alt="Arrow up icon"
                  className="icon_up"
                />
                <div className="cta_para">Fuel Your Digital-First Idea</div>
                <p className="para">With 1600+ Transformation Experts</p>
                <div className="common__btn">
                  <a
                    href="#"
                    className="btn_line btn-effect btn-blueeffect btn--show-modal"
                  >
                    <span>Innovate With Us</span>
                  </a>
                </div>
              </div>
            </div>
          </Col>

            {/* Tech Cards - This will trigger the pinning */}
            <Col lg={6} ref={techCardsRef}>
              <div className="tech_card_panel">
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/artificial-intelligence-icon-home.svg"
                        alt="Artificial Intelligence"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">Artificial Intelligence</div>
                        We leverage AI to craft intelligent solutions that
                        streamline operations and enhance decision-making
                        capabilities.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/generative-ai-icon-home.svg"
                        alt="Generative AI"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">Generative AI</div>
                        We utilize Generative AI technology to create solutions
                        that produce new content, automate creative processes
                        and enhance user experiences.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/machine-learning-home.svg"
                        alt="Machine Learning"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">Machine Learning</div>
                        We use ML to build intelligent systems that analyze data
                        patterns and predict outcomes while continuously
                        improving operations.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/computer-vision-icon-home.svg"
                        alt="Computer Vision"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">Computer Vision</div>
                        We employ computer vision to analyze visual data,
                        automate image processing tasks and enhance the accuracy
                        and speed of visual recognition systems.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/cloud-icon-home.svg"
                        alt="Cloud"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">Cloud</div>
                        We offer scalable and secure cloud consulting services
                        that enhance flexibility and reduce IT overhead,
                        allowing your team to focus on business growth.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/data-science-and-analytics-icon-home.svg"
                        alt="Data Science"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">Data Science And Analytics</div>
                        We leverage data to extract actionable insights, helping
                        your business make informed decisions and optimize
                        operations.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/iot-icon-home.svg"
                        alt="IoT"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">IoT</div>
                        We create IoT apps that connect various devices
                        seamlessly, boosting efficiency and opening new
                        possibilities for enhanced automation and monitoring.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/arvr-icon-home.svg"
                        alt="AR/VR"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">AR/VR</div>
                        We design and develop immersive AR and VR applications
                        that offer engaging and interactive user experiences.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/blockchain-icon-home.svg"
                        alt="Blockchain"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">Blockchain</div>
                        We develop blockchain solutions that enhance
                        transparency and security across sectors like finance,
                        retail, healthcare, and manufacturing.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tech_card">
                  <Link to="/" className="tech_card_inner" target="_blank" rel="noopener noreferrer">
                    <div className="flex-class">
                      <img
                        src="assets/images/icon/business-intelligence-home.svg"
                        alt="Business Intelligence"
                        loading="lazy"
                      />
                      <span className="tech_para">
                        <div className="head4">Business Intelligence</div>
                        We empower your business with BI tools that provide
                        clear, concise data visualization, helping your team to
                        understand trends and drive business performance.
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