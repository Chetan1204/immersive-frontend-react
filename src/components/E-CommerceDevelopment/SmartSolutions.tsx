import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question:
      "Struggling to deliver seamless user experiences across platforms?",
    answer:
      "Our expert eCommerce app developers understand the nuances of digital retail and design unified, cross-platform applications that ensure consistency, performance, and responsiveness.",
  },
  {
    question: "Losing conversions due to slow loading or poor UX?",
    answer:
      "We build high-performing applications optimized for speed, scalability, and seamless navigation — ensuring users stay engaged and conversions grow.",
  },
  {
    question: "Having trouble personalizing the customer journey?",
    answer:
      "Using AI-driven personalization, recommendation engines, and data analytics, we craft tailored experiences that boost customer satisfaction and loyalty.",
  },
  {
    question: "Worried about scalability as your business grows?",
    answer:
      "Our solutions are designed with modular architecture and cloud-native capabilities, making it easy to scale as your traffic, sales, and global presence increase.",
  },
  {
    question:
      "Struggling to integrate new technologies into your legacy systems?",
    answer:
      "We provide seamless integrations with third-party tools, APIs, and modern frameworks, helping you modernize legacy systems without disrupting operations.",
  },
];

const SmartSolutions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // sab band initially

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="smart-solutions py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-12">
             <div className="content">
              <h2>
                The eCommerce Industry Is Tough—We Ask the Right Questions and
                Build Smarter Solutions
              </h2>
              <p>
                From startups to global enterprises, every eCommerce business
                faces unique hurdles. As a top-tier eCommerce app development
                company, we specialize in tackling these challenges with custom
                applications built for scale, agility, and user impact.
              </p>
              </div>
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="content">
              <div className="accordion">
                {faqs.map((item, index) => (
                  <div
                    key={index}
                    className={`accordion-item ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{item.question}</span>
                     <span className="icon">
  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
</span>
                    </div>
                    {activeIndex === index && (
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button className="cta-btn mt-4">
                Solve Your Challenges Head-On with Our Team
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 text-center">
            <div className="image-wrapper">
              <img
                src="assets/images/E-commerce-Icon/order-banner.webp"
                alt="App mockup"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolutions;
