import React, { useState } from "react";
import "./Desktop.css"

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much does it cost to develop a WordPress website?",
    answer:
      "The cost of developing a WordPress website depends on factors like design complexity, required plugins, customization level, and overall project scope. A basic business website may cost around $1,000–$5,000, while highly customized WordPress solutions with advanced features, e-commerce integration, and custom themes can range from $5,000 to $30,000 or more. At Immersive Infotech, we offer transparent pricing and flexible engagement models to deliver maximum value within your budget."
  },
  {
    question: "How to choose the best WordPress development company?",
    answer:
      "Choosing the right WordPress development company requires evaluating their expertise, portfolio, and technical proficiency in building custom themes, plugins, and scalable websites. Look for companies with proven experience in delivering WordPress projects, strong client reviews, SEO knowledge, and a transparent development process. At Immersive Infotech, we combine technical expertise with industry experience to deliver high-performing WordPress solutions."
  },
  {
    question: "How long does it take to build a WordPress website?",
    answer:
      "The timeline for developing a WordPress website varies depending on the project’s complexity and requirements. A simple website can be completed within 2–4 weeks, while larger projects with custom features, e-commerce functionality, or third-party integrations may take 2–3 months or longer."
  },
  {
    question: "How can I track the progress of my WordPress project with Immersive Infotech?",
    answer:
      "We maintain complete transparency by sharing detailed project roadmaps, regular progress reports, and milestone updates. Our clients get continuous communication through emails, meetings, and demo sessions to review progress. We ensure that your feedback is integrated at every stage, guaranteeing a seamless and collaborative development experience."
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
