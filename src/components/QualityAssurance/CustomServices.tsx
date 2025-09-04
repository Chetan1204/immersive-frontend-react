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
    heading: "QA Consulting",
    CompanyDetails:
      "Our QA consulting services help you define the right testing strategy, tools, and processes aligned with your business objectives. From planning to execution, we guide you in building scalable and efficient quality assurance frameworks.",
    img: "assets/images/mobiledevelopmentservices/web-apps-dev-icon.svg",
  },
  {
    id: "02",
    heading: "Custom QA & Testing Services",
    CompanyDetails:
      "We provide tailored QA services designed to meet your unique requirements. From manual testing to automated frameworks, our team ensures flawless functionality, seamless user experience, and optimal performance for your software applications.",
    img: "assets/images/mobiledevelopmentservices/custom-web-application-development-icon.svg",
  },
  {
    id: "03",
    heading: "Software Testing & QA Revamp",
    CompanyDetails:
      "Revamp your testing approach with modern QA practices and tools. We enhance outdated testing processes, improve defect detection, and ensure faster delivery with continuous testing and robust quality engineering solutions.",
    img: "assets/images/mobiledevelopmentservices/open-source-web-development-and-revamp-icon.svg",
  },
  {
    id: "04",
    heading: "Automation & Performance Testing",
    CompanyDetails:
      "Boost efficiency with advanced automation and performance testing solutions. Our QA experts build reliable automation frameworks and conduct load, stress, and scalability testing to ensure your applications perform under all conditions.",
    img: "assets/images/mobiledevelopmentservices/progressive-web-application-icon.svg",
  },
  {
    id: "05",
    heading: "QA Support & Maintenance",
    CompanyDetails:
      "Our ongoing QA support and maintenance services keep your applications stable, secure, and high-performing. From regression testing and bug fixing to continuous monitoring, we ensure long-term reliability of your digital products.",
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
          <h1 className="cta_hd">Employ End-to-End Custom <br /> QA & Software Testing Services
</h1>
          <h5 className="app__subhead">
            As a trusted QA & Software Testing company, we specialize in creating powerful, scalable, and fully customized QA & Software Testing solutions.
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
