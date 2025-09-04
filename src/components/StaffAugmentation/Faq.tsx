import React, { useState } from "react";
import "./Desktop.css"

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much does staff augmentation cost?",
    answer:
      "The cost of staff augmentation depends on factors such as the required skill sets, experience level of resources, project duration, and engagement model. Hourly or monthly rates may vary from $25–$100+ depending on the expertise needed. At Immersive Infotech, we provide flexible pricing models to ensure you get cost-effective access to top talent without the overhead of full-time hiring."
  },
  {
    question: "How to choose the best staff augmentation company?",
    answer:
      "When selecting a staff augmentation partner, evaluate their ability to provide skilled professionals across multiple domains, proven experience in resource management, and transparent engagement models. Look for companies with a strong talent pool, flexible contracts, and client success stories. At Immersive Infotech, we specialize in providing highly skilled professionals who seamlessly integrate with your in-house team."
  },
  {
    question: "How quickly can I hire resources through staff augmentation?",
    answer:
      "The hiring timeline depends on the required skills and availability. In most cases, we can provide suitable candidates within 1–2 weeks. For niche or highly specialized roles, the process may take longer. Our streamlined onboarding ensures that resources can quickly adapt and start contributing to your projects with minimal downtime."
  },
  {
    question: "How can I track the performance of augmented staff with Immersive Infotech?",
    answer:
      "We maintain full transparency and ensure smooth collaboration by providing regular updates, performance tracking, and progress reports. Our clients stay connected through dedicated communication channels, project management tools, and periodic review sessions. We ensure that augmented staff deliver consistent value and align with your project goals."
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
