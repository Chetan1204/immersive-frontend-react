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
    heading: "Staff Augmentation Consulting",
    CompanyDetails:
      "Our staff augmentation consulting services help you identify the right talent, skill sets, and engagement models to scale your team efficiently. We analyze your business needs and provide expert recommendations to ensure you get the best-fit resources quickly and effectively.",
    img: "assets/images/mobiledevelopmentservices/web-apps-dev-icon.svg",
  },
  {
    id: "02",
    heading: "Custom Team Augmentation",
    CompanyDetails:
      "Scale your workforce with our custom team augmentation services. Whether you need developers, designers, QA engineers, or project managers, we provide skilled professionals who integrate seamlessly with your in-house team to meet your specific project requirements.",
    img: "assets/images/mobiledevelopmentservices/custom-web-application-development-icon.svg",
  },
  {
    id: "03",
    heading: "IT Resource Revamp & Upscaling",
    CompanyDetails:
      "Revamp your existing workforce strategy by adding top-notch talent through our staff augmentation services. We help bridge skill gaps, modernize processes, and ensure your projects are delivered with enhanced efficiency and expertise.",
    img: "assets/images/mobiledevelopmentservices/open-source-web-development-and-revamp-icon.svg",
  },
  {
    id: "04",
    heading: "On-Demand Talent & Flexible Engagement",
    CompanyDetails:
      "Access a global pool of talent with flexible engagement models. Whether you require short-term specialists or long-term dedicated professionals, our staff augmentation services provide on-demand scalability without the overhead of permanent hiring.",
    img: "assets/images/mobiledevelopmentservices/progressive-web-application-icon.svg",
  },
  {
    id: "05",
    heading: "Ongoing Support & Workforce Management",
    CompanyDetails:
      "Our staff augmentation services go beyond hiring—we also ensure continuous support, workforce monitoring, and smooth collaboration. From onboarding to performance tracking, we help maintain long-term efficiency and stability for your extended team.",
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
          <h1 className="cta_hd">Employ End-to-End  <br />Staff Augmentation Services
</h1>
          <h5 className="app__subhead">
            As a trusted Staff Augmentation company, we specialize in creating powerful, scalable, and fully customized Staff Augmentation solutions.
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
