import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import"./Desktop.css";

const tabs = [
  {
    id: "01",
    name: "Android Application Development",
    imgSrc: "assets/images/mobiledevelopmentservices/android-app-icon.svg",
    description:
      " We provide comprehensive Android mobile application development Services, custom to your specific business requirements. Our expert app developers are well-versed in guiding clients through the intricate journey of conceptualizing and building enterprise-grade Android applications.",
  },
  {
    id: "02",
    name: "iOS Application Development",
    imgSrc: "assets/images/mobiledevelopmentservices/ios-logo-icon.svg",
    description:
      " We deliver highly functional and feature-rich iOS applications that cater to the needs of both startups and enterprises. Our team of skilled iOS app development service  experts is proficient in programming languages such as Swift, Objective-C, React Native, Flutter, and Ionic, ensuring the delivery of industry-leading iOS solutions.",
  },
  {
    id: "03",
    name: "Flutter Application Development",
    imgSrc: "assets/images/mobiledevelopmentservices/flutter-application-icon.svg",
    description:
      " As a leading Flutter app development company, we specialize in crafting multi-platform applications with seamless animations, appealing user interfaces, and exceptional performance. Our team leverages a single codebase to create cross-platform mobile apps that maximize the return on investment for clients.",
  },
  {
    id: "04",
    name: "React Native Application Development",
    imgSrc: "assets/images/mobiledevelopmentservices/react-native-application-icon.svg",
    description:
" Our exceptional React Native development services  assure the development of fast and seamless cross-platform mobile applications that excel in performance, scalability, and technological prowess. Our goal-oriented, result-driven approach ensures the delivery of customized mobile application development solutions, meeting the unique business needs of clients worldwide and exceeding their expectations.",
  },
  {
    id: "05",
    name: "Progressive Web App Development",
    imgSrc: "assets/images/mobiledevelopmentservices/progressive-web-application-icon.svg",
    description:
"As a  progressive web app development company, we specialize in creating high-performance, user-friendly web applications that deliver a native app-like experience. Our team utilizes the latest technologies to build scalable and secure PWAs that enhance user engagement and drive business growth.",
  },
  {
    id: "06",
    name: "Wearable Application Development",
    imgSrc: "assets/images/mobiledevelopmentservices/wearable-application-development-icon.svg",
    description:
" Our expertise extends to developing companion apps for various wearable devices. With meticulous attention to detail in offering tailored solutions, we ensure seamless integration and optimal performance across all platforms.",
  },
  {
    id: "07",
    name: "dApp Development",
    imgSrc: "assets/images/mobiledevelopmentservices/dapp-development-icon.svg",
    description:
"Our dApp development services focus on creating decentralized applications that leverage blockchain technology. We build secure, transparent, and scalable dApps that empower users with control over their data and transactions, ensuring a robust and efficient user experience.",
  },
  {
    id: "08",
    name: "Web App Development",
    imgSrc: "assets/images/mobiledevelopmentservices/web-apps-dev-icon.svg",
    description:
" Our web app development services encompass the creation of dynamic, responsive, and user-friendly web applications. We utilize modern frameworks and technologies to build scalable web solutions that enhance user engagement and drive business success.",
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
