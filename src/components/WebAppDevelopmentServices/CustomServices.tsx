import React, { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Mobile.css";

interface CompanySliderItem {
  id: string;
  heading: string;
  CompanyDetails: string;
  img: string;
}

const companySlider1: CompanySliderItem[] = [
  {
    id: "01",
    heading: "Web App Consulting",
    CompanyDetails: " Our expert web app consultants work closely with you to understand your business goals, challenges, and requirements. We provide expert assistance and consulting services to help you make informed decisions and achieve your objectives. From initial planning to final deployment, and beyond, our consulting services ensure your web app project is on the right track.",
    img: "assets/images/mobiledevelopmentservices/web-apps-dev-icon.svg",
  },
  {
    id: "02",
    heading: " Custom Web Application Development",
    CompanyDetails: " Our custom web application development services are designed to meet your unique business requirements. Whether you need a simple web solution or a complex application, our efficient app developers are here to help.",
    img: "assets/images/mobiledevelopmentservices/custom-web-application-development-icon.svg",
  },
  {
    id: "03",
    heading: " Open Source Web Development and Revamp",
    CompanyDetails: " Open source development is a concept that allows you to develop or revamp your website with the same source code. With our open-source website revamp and development services, you can alter the source code for your website from itsnative design to reach unattainable roll-out times and limited budgets.",
    img: "assets/images/mobiledevelopmentservices/open-source-web-development-and-revamp-icon.svg",
  },
  {
    id: "04",
    heading: " Progressive Web Apps Development",
    CompanyDetails: " Our advanced PWA services  combine the best features of web and mobile applications. They are designed to be fast, reliable, and engaging, providing anative app-like experience with offline capabilities and push notifications.",
    img: "assets/images/mobiledevelopmentservices/progressive-web-application-icon.svg",
  },
  {
    id: "05",
    heading: "Web Application Support and Maintenance",
    CompanyDetails: " As a leading web apps development company, our web application support and maintenance services entail continuously monitoring and maintaining a web app to ensure its performance, security, and function. To guard against potential vulnerabilities, our services comprise responsibilities like bug repairs, updates, security patches, and server monitoring.",
    img: "assets/images/mobiledevelopmentservices/web-application-support-and-maintenance-icon.svg",
  },
  
];

const CustomServices: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 320; // width + gap
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Duplicate array for infinite effect
  const sliderItems = [...companySlider1, ...companySlider1];

  const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior,
    });
    setActiveIndex(index % companySlider1.length);
  };

  // Always go forward
  const scrollForward = () => {
    scrollToIndex(activeIndex + 1);
  };

  // Auto forward loop
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      scrollForward();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying]);

  // Handle scroll position to loop back
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const index = Math.round(slider.scrollLeft / cardWidth);

      // If we reach second set, jump back to same index in first set instantly
      if (index >= companySlider1.length) {
        slider.scrollTo({
          left: (index - companySlider1.length) * cardWidth,
          behavior: "auto",
        });
      }

      setActiveIndex(index % companySlider1.length);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="custom-approach">
      <div className="container">
        <div className="text-block">
          <h1 className="cta_hd"> Employ End-to-End Custom Web <br /> App Development Services</h1>
          <h5 className="app__subhead">
            As a trusted website app development company, we offer a comprehensive range of web development services.
            <br/>
             Our skilled developers delve deep into your unique business challenges to deliver perfectly tailored solutions that  
             <br/>
              Our skilled developers delve deep into your unique business challenges to deliver perfectly tailored solutions that 
              <br/>
               a dynamic web presence that drives success.
          </h5>
        </div>

        <div className="slider-header">
          <span className="scroll-count">
            {(activeIndex + 1).toString().padStart(2, "0")} —{" "}
            {companySlider1.length.toString().padStart(2, "0")}
          </span>
          <div className="arrow-buttons">
            <button onClick={scrollForward} className="slider-arrow">
              <FiChevronLeft size={22} />
            </button>
            <button onClick={scrollForward} className="slider-arrow">
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>

        <div
          className="card-wrapper"
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {sliderItems.map((item, index) => (
            <div
              className={`custom-approach-box ${
                index % companySlider1.length === activeIndex ? "highlight" : ""
              }`}
              key={`${item.id}-${index}`}
              onClick={() => scrollToIndex(index)}
            >
              <div className="approach-icon">
                <img src={item.img} alt={item.heading} />
              </div>
              <h3 className="heading4">{item.heading}</h3>
              <p className="para">{item.CompanyDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomServices;
