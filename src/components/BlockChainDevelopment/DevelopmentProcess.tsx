import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const DevelopmentProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const techCardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (!containerRef.current || !leftBoxRef.current || !techCardsRef.current) return;

    const endValue = techCardsRef.current.offsetHeight - leftBoxRef.current.offsetHeight;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${endValue}`,
      pin: leftBoxRef.current,
      pinSpacing: true,
      scrub: false,
      markers: false,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  const techCards = [
    {
      icon: "artificial-intelligence-icon-home.svg",
      title: "Artificial Intelligence",
      content: "We leverage AI to craft intelligent solutions that streamline operations and enhance decision-making capabilities.",
    },
    {
      icon: "generative-ai-icon-home.svg",
      title: "Generative AI",
      content: "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.",
    },
    {
      icon: "machine-learning-home.svg",
      title: "Machine Learning",
      content: "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.",
    },
    {
      icon: "computer-vision-icon-home.svg",
      title: "Computer Vision",
      content: "We employ computer vision to analyze visual data, automate image processing tasks and enhance the accuracy and speed of visual recognition systems.",
    },
    {
      icon: "cloud-icon-home.svg",
      title: "Cloud",
      content: "We offer scalable and secure cloud consulting services that enhance flexibility and reduce IT overhead, allowing your team to focus on business growth.",
    },
    {
      icon: "data-science-and-analytics-icon-home.svg",
      title: "Data Science And Analytics",
      content: "We leverage data to extract actionable insights, helping your business make informed decisions and optimize operations.",
    },
    {
      icon: "iot-icon-home.svg",
      title: "IoT",
      content: "We create IoT apps that connect various devices seamlessly, boosting efficiency and opening new possibilities for enhanced automation and monitoring.",
    },
    {
      icon: "arvr-icon-home.svg",
      title: "AR/VR",
      content: "We design and develop immersive AR and VR applications that offer engaging and interactive user experiences.",
    },
    {
      icon: "blockchain-icon-home.svg",
      title: "Blockchain",
      content: "We develop blockchain solutions that enhance transparency and security across sectors like finance, retail, healthcare, and manufacturing.",
    },
    {
      icon: "business-intelligence-home.svg",
      title: "Business Intelligence",
      content: "We empower your business with BI tools that provide clear, concise data visualization, helping your team to understand trends and drive business performance.",
    },
  ];

  return (
    <>
      {/* Existing Section */}
      <section className="py-5 pt-0 engineering-excellence">
        <Container>
          <Row ref={containerRef} className="industry-sticky-row d-flex align-items-start industry-main-section">
            <Col lg={6}>
              <div className="industry-best left-box" ref={leftBoxRef}>
                <h2 className="best-text">
                 A Blockchain Development Process Trusted by Leaders
                </h2>

                <p style={{ fontSize: 21 }}> As a top-rated blockchain software development company, we have almost a decade of
 industry experience, having delivered multiple custom blockchain solutions. Our team
 understands just the right development process that aligns well with your project
 requirements.</p>
                {/* <div className="industry_cta">
                  <img src="assets/images/icon/icon-up.svg" alt="Arrow up icon" className="icon_up" />
                  <div className="cta_para">Fuel Your Digital-First Idea</div>
                  <p className="para">With 1600+ Transformation Experts</p>
                  <div className="common__btn">
                    <a href="#" className="btn_line btn-effect btn-blueeffect btn--show-modal">
                      <span>Innovate With Us</span>
                    </a>
                  </div>
                </div> */}
              </div>
            </Col>

            {/* Tech Cards as FAQ */}
            <Col lg={6} ref={techCardsRef}>
              <div className="tech_card_panel">
                {techCards.map((card, index) => (
                  <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="faq-header">
                      <h4>{card.title}</h4>
                      <FaArrowDown className={`faq-icon ${activeIndex === index ? "rotate" : ""}`} />
                    </div>
                    {activeIndex === index && (
                      <div className="faq-body">
                        <p>{card.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* New CTA Section */}
      <section className="blockchain-cta">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <h2 className="cta-title">
                Ready to fuel your business transformation journey with blockchain?
              </h2>
              <div className="common__btn mt-3">
                <a href="#" className="btn_line btn-effect btn-blueeffect">
                  <span>Contact Our Experts</span>
                </a>
              </div>
            </Col>
            <Col lg={6} className="cta-image" />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DevelopmentProcess;
