import React, { useState } from "react";
import "./Desktop.css"

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much does it cost to develop an AI-based app?",
    answer:
      "The cost of developing an AI-based app depends on various factors, including the complexity of the app, the type of AI technologies implemented (e.g., NLP, ML, or computer vision), and the project’s scope. Basic AI solutions may cost around $10,000–$50,000, while advanced apps with custom AI models can range from $50,000 to $300,000 or more. At Immersive Infotech, we provide transparent pricing and flexible engagement models to ensure you get the best value for your investment without compromising on quality."
  },
  {
    question: "How to choose the best AI app development company?",
    answer:
      "Selecting the right AI app development company involves assessing several factors. Look for companies with proven expertise in AI technologies, a robust portfolio of successful projects, and a skilled team proficient in AI tools and frameworks. Additionally, prioritize companies with strong R&D focus, industry-specific experience, and transparent communication processes."
  },
  {
    question: "How long does it take to build an AI-based product?",
    answer:
      "The development timeline for an AI-based product varies based on the project’s complexity, goals, and technological requirements. Generally, small-scale AI solutions can be developed in 3–6 months, while more complex applications may take 9–18 months or longer."
  },
  {
    question:
      "How can I assess the progress of my AI development project while collaborating with Immersive Infotech?",
    answer:
      "Transparency is a core value at Immersive Infotech. We provide detailed project roadmaps, regular progress reports, and clear communication channels to keep you informed at every stage. From initial development to final deployment, our team ensures seamless collaboration through periodic updates, demo sessions, and feedback integration."
  }
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq_section">
      <div className="container">
        <h2 className="text-center blk mb-5">Frequently Asked Questions</h2>
        <div className="row">
          {faqData.map((faq, index) => (
            <div className="col-lg-6 col-md-6" key={index}>
              <div className="app-faq-wrap-list clearfix">
                <h3
                  className="head"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span
                    className={`arrow-link ${activeIndex === index ? "rotate" : ""}`}
                  >
                    <svg width="18px" height="15px" viewBox="0 0 18 15">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </span>
                </h3>
                <div
                  className={`faq-content-wrap ${activeIndex === index ? "show" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
