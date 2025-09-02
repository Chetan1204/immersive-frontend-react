import React, { JSX, useState } from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaServer,
  FaShieldAlt,
  FaShoppingCart,
  FaProjectDiagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

type AccordionItem = {
  id: string;
  title: string;
  icon: JSX.Element;
  content: JSX.Element;
};

const TechStack: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("mobile");

  const handleToggle = (id: string) => {
    setActiveId(activeId === id ? "" : id); // toggle open/close
  };

  const accordionItems: AccordionItem[] = [
    {
      id: "mobile",
      title: "Mobile development languages and key toolkits",
      icon: <FaMobileAlt />,
      content: (
        <div className="icons-grid">
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/swift-icon.svg" alt="Swift" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/java-icon.svg" alt="Java" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/kotlin-icon.svg" alt="Kotlin" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/c-sharp-icon.svg" alt="C#" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/flutter-icon.svg" alt="Flutter" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/pwa-icon.svg" alt="PWA" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/ionic-icon.svg" alt="Ionic" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/eclipse-icon.svg" alt="Eclipse" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/xcode-icon.svg" alt="Xcode" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/ios-icon.svg" alt="iOS SDK" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/android-icon.svg" alt="Android Studio" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/react-icon.svg" alt="React Native" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/objective-icon.svg" alt="Objective-C" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/css-icon.svg" alt="CSS3" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/javascript--icon.svg" alt="JavaScript" />
       
        </div>
      ),
    },
    {
      id: "web",
      title: "Web front end",
      icon: <FaLaptopCode />,
      content: 
      <div className="icons-grid">
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/html-icon.svg" alt="HTML5" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/css-icon.svg" alt="CSS3" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/javascript--icon.svg" alt="JavaScript" />
         <img src="/assets/images/E-commerce-Icon/Tech-Icon/angular-icon.svg" alt="Angular" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/next-icon.svg" alt="Next.js" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/react-icon.svg" alt="React Native" />
         <img src="/assets/images/E-commerce-Icon/Tech-Icon/vue-icon.svg" alt="Vue.js" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/ember-icon.svg" alt="Ember.js" />
           <img src="/assets/images/E-commerce-Icon/Tech-Icon/meteor-icon.svg" alt="Meteor.js" />



        </div>,
    },
    {
      id: "backend",
      title: "Back-end programming languages",
      icon: <FaServer />,
      content: 
       <div className="icons-grid">
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/microsoft-icon.svg" alt="Microsoft" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/java-icon.svg" alt="Java" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/python-icon.svg" alt="Python" />
         <img src="/assets/images/E-commerce-Icon/Tech-Icon/node-icon.svg" alt="Node.js" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/php-icon.svg" alt="PHP" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/go-icon.svg" alt="Go" />
        



        </div>,
    },
    {
      id: "qa",
      title: "QA",
      icon: <FaShieldAlt />,
      content: 
      <div className="icons-grid">
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/test-icon.svg" alt="Microsoft" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/java-icon.svg" alt="Java" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/python-icon.svg" alt="Python" />
         <img src="/assets/images/E-commerce-Icon/Tech-Icon/node-icon.svg" alt="Node.js" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/php-icon.svg" alt="PHP" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/go-icon.svg" alt="Go" />
        



        </div>,
    },
    {
      id: "integration-ecommerce",
      title: "Integrations: Ecommerce platforms, PIM and CMS",
      icon: <FaShoppingCart />,
      content: 
      <div className="icons-grid">
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/adobe-con.svg" alt="Adobe" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/shopify-icon.svg" alt="Shopify" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/big-icon.svg" alt="BigCommerce" />
         <img src="/assets/images/E-commerce-Icon/Tech-Icon/salesforce-icon.svg" alt="Salesforce" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/hybris-icon.svg" alt="Hybris" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/oracle-icon.svg" alt="Oracle" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/pimcore-icon.svg" alt="Pimcore" />
       <img src="/assets/images/E-commerce-Icon/Tech-Icon/akeneo-icon.svg" alt="Akeneo" />
         <img src="/assets/images/E-commerce-Icon/Tech-Icon/salsify-icon.svg" alt="Salsify" />
         <img src="/assets/images/E-commerce-Icon/Tech-Icon/plytix-icon.svg" alt="Plytix" />
          <img src="/assets/images/E-commerce-Icon/Tech-Icon/riversand-icon.svg" alt="Riversand" />
           <img src="/assets/images/E-commerce-Icon/Tech-Icon/dynamic-icon.svg" alt="Drupal" />
            <img src="/assets/images/E-commerce-Icon/Tech-Icon/inriver-icon.svg" alt="Contentful" />
             <img src="/assets/images/E-commerce-Icon/Tech-Icon/wordpress-icon.svg" alt="Sitecore" />
              <img src="/assets/images/E-commerce-Icon/Tech-Icon/sitecore-icon.svg" alt="Strapi" />


        </div>,
    },
    {
      id: "integration-erp",
      title: "Integrations: ERP, CRM",
      icon: <FaProjectDiagram />,
      content: 
      <div>
        <img src="/assets/images/E-commerce-Icon/Tech-Icon/sap-icon.svg" alt="ERP" />
        <img src="/assets/images/E-commerce-Icon/Tech-Icon/acumatica-icon.svg" alt="CRM" />
        <img src="/assets/images/E-commerce-Icon/Tech-Icon/brightpearl-icon.svg" alt="Zendesk" />
        <img src="/assets/images/E-commerce-Icon/Tech-Icon/microsoft-icon.svg" alt="Microsoft" />
        <img src="/assets/images/E-commerce-Icon/Tech-Icon/odoo-icon.svg" alt="Salesforce" />
        <img src="/assets/images/E-commerce-Icon/Tech-Icon/salesforce-icon.svg" alt="Zoho" />
        <img src="/assets/images/E-commerce-Icon/Tech-Icon/netsuite-icon.svg" alt="HubSpot" />
        
      </div>,
    },
  ];

  // Split into 2 columns
  const leftCol = accordionItems.slice(0, 3);
  const rightCol = accordionItems.slice(3);

  return (
    <section className="tech-stack">
      <div className="container">
        <div className="header">
          <h2>The Backbone of eCommerce Development: Key Technology Stack</h2>
          <p>
            As eCommerce evolves, so do the technologies that drive it. As a
            groundbreaking eCommerce app development services provider, we help you
            stay ahead of the curve by incorporating the latest technology stack.
            This future-proofs your eCommerce solutions and seamlessly caters to the
            ever-changing demands of online shopping.
          </p>
        </div>

        <div className="row">
          {/* Left column */}
          <div className="col-12 col-lg-6">
            {leftCol.map((item) => (
              <div key={item.id} className="accordion-item mb-4">
                <button
                  className={`accordion-header ${activeId === item.id ? "active" : ""}`}
                  onClick={() => handleToggle(item.id)}
                >
                  <span className="icon">{item.icon}</span>
                  <span>{item.title}</span>
                  {activeId === item.id ? (
                    <FaChevronUp className="arrow" />
                  ) : (
                    <FaChevronDown className="arrow" />
                  )}
                </button>
                <div className={`accordion-content ${activeId === item.id ? "show" : ""}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="col-12 col-lg-6">
            {rightCol.map((item) => (
              <div key={item.id} className="accordion-item mb-4">
                <button
                  className={`accordion-header ${activeId === item.id ? "active" : ""}`}
                  onClick={() => handleToggle(item.id)}
                >
                  <span className="icon">{item.icon}</span>
                  <span>{item.title}</span>
                  {activeId === item.id ? (
                    <FaChevronUp className="arrow" />
                  ) : (
                    <FaChevronDown className="arrow" />
                  )}
                </button>
                <div className={`accordion-content ${activeId === item.id ? "show" : ""}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
