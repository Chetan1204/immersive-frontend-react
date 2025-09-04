import React, { useState } from "react";
import "./Desktop.css"

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much does it cost to develop a full stack application?",
    answer:
      "The cost of developing a full stack application depends on factors like the project’s complexity, chosen technologies, required integrations, and customization level. A simple web application may cost around $10,000–$30,000, while enterprise-grade full stack solutions with advanced features, APIs, and scalability can range from $50,000 to $150,000 or more. At Immersive Infotech, we offer transparent pricing and flexible models to ensure maximum value for your investment."
  },
  {
    question: "How to choose the best full stack development company?",
    answer:
      "When selecting a full stack development company, evaluate their expertise across front-end and back-end technologies, proven experience in building scalable applications, and a strong portfolio. Look for companies skilled in modern frameworks like React, Angular, Node.js, Python, or Java, and those with a track record of delivering secure, high-performance solutions. At Immersive Infotech, our team combines technical depth with industry knowledge to build future-ready applications."
  },
  {
    question: "How long does it take to build a full stack application?",
    answer:
      "The development timeline for a full stack application depends on project scope and complexity. Basic applications can be built in 2–3 months, while more complex platforms with multiple integrations, advanced features, and custom architecture may take 6–12 months or longer."
  },
  {
    question: "How can I track the progress of my full stack project with Immersive Infotech?",
    answer:
      "We ensure complete transparency throughout your project. Our team provides detailed roadmaps, regular progress updates, and milestone reviews. Clients are kept informed through emails, sprint reviews, demo sessions, and continuous communication. Your feedback is integrated at every stage to guarantee a smooth and collaborative development experience."
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
