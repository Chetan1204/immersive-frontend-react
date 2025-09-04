import React, { useState } from "react";


interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a dedicated development team?",
    answer:
      "It's a group of adaptable engineering specialists who work as an external engineering unit on a single project (typically a long-term one). It could also involve a project manager or be overseen by your management team."
  },
  {
    question: "Is it cost-efficient to use dedicated development team services?",
    answer:
      "You won't have to spend money on recruiting developers if you hire a dedicated team instead of building an in-house team, and in most circumstances, hiring a dedicated team is far more cost-effective. You can also scale up or down your crew to maximize your cost-effectiveness."
  },
  {
    question: "For how long can I hire a dedicated development company?",
    answer:
      "We strive to assist our clients at every stage of the product development process , and we are happy to provide support and optimization services after the product has been launched and has gained customers."
  },
  {
    question:
      "What is the cost to hire dedicated development team?",
    answer:
      "Transparency is a core value a From initial development to final deployment, our team ensures seamless collaboration through periodic updates, demo sessions, and feedback integration."
  }
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="dedicated-faq-section">
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
