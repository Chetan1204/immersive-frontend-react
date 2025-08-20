import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: string | string[];
}

const WhyImmersive: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "Leveraging Extraordinary Technology Only",
      answer:
        "It is the time when technology is growing rapidly. And we embrace the changing trends to deliver perfect solutions. We've partnered with the best of tools to bring the latest and greatest technology to you.",
    },
    {
      question: "Hassle-free Development and Maintenance",
      answer: [],
    },
    {
      question: "Out-of-the-Box and Unrivalled Designs",
      answer: [],
    },
    {
      question: "One-stop Solution for Your Business",
      answer: [],
    },    
    {
      question: "Assured Confidentiality and Security",
      answer: [],
    },    
    {
      question: "Independent and Objective",
      answer: [],
    },
  ];

  return (
    <div className="py-5 why-immersive">
      <Container>
        <Row>
          {/* Left Section */}
          <Col lg={6} md={6} sm={12} className="wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s">
            <h2 className="title-text">
              Why Immersive Infotech Stands Out Every Time?
            </h2>
            <p className="pera-text">
              Apart from our mission and vision of meeting customer goals and
              satisfaction, we have several other reasons that set us apart from
              our competitors.
            </p>
            <img
              src="assets/images/imm21.png"
              alt="Immersive Infotech"
              className="img-fluid"
            />
          </Col>

          {/* Right Section (FAQ Accordion) */}
          <Col lg={6} md={6} sm={12} >
            <div className="accordion" id="faqAccordion">
              {faqItems.map((item, index) => (
                <div key={index} className="accordion-item wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        activeIndex === index ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => toggleFAQ(index)}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      {typeof item.answer === "string" ? (
                        <p>{item.answer}</p>
                      ) : (
                        <ul>
                          {item.answer.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyImmersive;
