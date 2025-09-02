import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const tabs = [
  {
    id: "01",
    name: " Microservices-Based eCommerce Web and App Development ",
    imgSrc: "assets/images/E-commerce-Icon/microservices.svg",
    description:
      "  We build scalable platforms using a microservices architecture  as part of our eCommerce application development services. Our experts design modular components like product catalogs, payments, and user management, so each part can scale independently. This allows for high performance, better fault tolerance, and easier updates as your business evolves.",
  },
  {
    id: "02",
    name: " Backend, Frontend, & CRM Development ",
    imgSrc: "assets/images/E-commerce-Icon/backend.svg",
    description:
      " Our backend, frontend, and CRM development services are designed to create seamless and efficient eCommerce experiences. We leverage the latest technologies and frameworks to build robust applications that enhance user engagement and drive business growth.",
  },
  {
    id: "03",
    name: " Payment Gateways Development and Integration ",
    imgSrc: "assets/images/E-commerce-Icon/payment.svg",
    description:
      " Our payment gateways development and integration services ensure secure and seamless transactions for your eCommerce platform. We work with various payment providers to implement customized solutions that enhance the user experience and drive conversions.",
  },
  {
    id: "04",
    name: " PWA eCommerce Development ",
    imgSrc: "assets/images/E-commerce-Icon/pwa.svg",
    description:
      " Our PWA eCommerce development services focus on creating fast, reliable, and engaging web applications that work seamlessly across all devices. We leverage the latest technologies to build PWAs that enhance user experience and drive conversions.",
  },
  {
    id: "05",
    name: " eCommerce Marketplace Development ",
    imgSrc: "assets/images/E-commerce-Icon/ecommerce.svg",
    description:
      " Our eCommerce marketplace development services focus on creating robust and scalable platforms that connect buyers and sellers seamlessly. We leverage the latest technologies to build feature-rich marketplaces that enhance user experience and drive business growth.",
  },
  {
    id: "06",
    name: " Aggregator Portals Development ",
    imgSrc: "assets/images/E-commerce-Icon/aggregator.svg",
    description:
      " Our aggregator portals development services focus on creating platforms that aggregate content and services from various sources. We leverage the latest technologies to build scalable and efficient aggregator portals that enhance user experience and drive business growth.",
  },
  


];
const AIServices = () => {
  const [activeTab, setActiveTab] = useState(0); // desktop
  const [openIndex, setOpenIndex] = useState<number | null>(null); // mobile

  const handleAccordionToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="artificial-intelligence">
      <div className="container">

        {/* Desktop Layout */}
        <div className="desktop-view">
          <div className="services_container row">
            <div className="col-lg-5 col-md-5">
              <div className="services_lt">
                <ul className="scroll_list">
                  {tabs.map((tab, i) => (
                    <li
                      key={tab.id}
                      className={`tab-link ${activeTab === i ? "current" : ""}`}
                      onClick={() => setActiveTab(i)}
                    >
                      <span data-tab={tab.id}>
                        <span className="scroll_list_num">{tab.id}.</span>
                        {tab.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="services_rt">
                {tabs.map((tab, i) =>
                  activeTab === i ? (
                    <div key={tab.id} className="tab-content active-tab">
                      <figure>
                        <img src={tab.imgSrc} alt={tab.name} loading="lazy" />
                      </figure>
                      <h2 className="serv_card_head">{tab.name}</h2>
                      <p className="card_para">{tab.description}</p>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="mobile-view">
          {tabs.map((tab, i) => (
            <div
              key={tab.id}
              className={`accordion-card ${openIndex === i ? "open" : ""}`}
            >
              <div
                className="accordion-header"
                onClick={() => handleAccordionToggle(i)}
              >
                <img src={tab.imgSrc} alt={tab.name} />
                <span className="title">{tab.name}</span>
                <span className="arrow">
  {openIndex === i ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
</span>
              </div>
              <div
                className="accordion-content"
                style={{
                  maxHeight: openIndex === i ? "500px" : "0",
                }}
              >
                <p>{tab.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIServices;
