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
    heading: "Full Stack Consulting",
    CompanyDetails:
      "Our full stack consulting services help you choose the right front-end and back-end technologies, frameworks, and architecture tailored to your business goals. From planning to deployment, we ensure you adopt the most scalable and efficient development approach.",
    img: "assets/images/mobiledevelopmentservices/web-apps-dev-icon.svg",
  },
  {
    id: "02",
    heading: "Custom Full Stack Development",
    CompanyDetails:
      "We build tailored full stack solutions using modern technologies such as React, Angular, Node.js, Python, and more. Whether it's web apps, enterprise platforms, or SaaS solutions, we create end-to-end applications that perfectly align with your business requirements.",
    img: "assets/images/mobiledevelopmentservices/custom-web-application-development-icon.svg",
  },
  {
    id: "03",
    heading: "Application Modernization & Revamp",
    CompanyDetails:
      "Upgrade and revamp outdated applications with modern full stack development practices. We optimize performance, redesign user interfaces, migrate legacy systems, and deliver scalable, secure, and future-ready solutions.",
    img: "assets/images/mobiledevelopmentservices/open-source-web-development-and-revamp-icon.svg",
  },
  {
    id: "04",
    heading: "API Integration & Performance Optimization",
    CompanyDetails:
      "Enhance your applications with seamless API integrations, microservices, and performance optimization. Our full stack developers ensure fast, reliable, and highly interactive user experiences across all devices and platforms.",
    img: "assets/images/mobiledevelopmentservices/progressive-web-application-icon.svg",
  },
  {
    id: "05",
    heading: "Full Stack Support & Maintenance",
    CompanyDetails:
      "Our full stack support and maintenance services keep your applications running smoothly, securely, and without downtime. From bug fixes and upgrades to security monitoring and feature enhancements, we ensure long-term stability and growth.",
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
          <h1 className="cta_hd">Employ End-to-End  <br />Full Stack Development Services
</h1>
          <h5 className="app__subhead">
            As a trusted Full Stack Development company, we specialize in creating powerful, scalable, and fully customized Full Stack Development solutions.
            <br />
            Our skilled developers delve deep into your unique business challenges to deliver perfectly tailored solutions that
            <br />
            Our skilled developers delve deep into your unique business challenges to deliver perfectly tailored solutions that
            <br />
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
