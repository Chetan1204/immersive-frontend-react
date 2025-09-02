import React, { useState } from "react";


type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "AI-Powered eCommerce Experiences",
    description:
      "As an experienced AI development company, we specialize in embedding intelligent features like chatbots, personalized recommendations, and predictive analytics to create smarter, more engaging eCommerce applications.",
    image: "/assets/images/E-commerce-Icon/ai-banner.webp", // 🔹 Place your image in public/img/
  },
  {
    id: 2,
    title: " Secure & Transparent Transactions with Blockchain",
    description:
      " Our blockchain solutions ensure secure and transparent transactions, reducing fraud and enhancing trust in your eCommerce platform.",
    image: "/assets/images/E-commerce-Icon/secure-banner.webp",
  },
  {
    id: 3,
    title: " Connected Retail with IoT",
    description:"Leverage IoT technology to create connected retail experiences that enhance customer engagement and streamline operations.",
    image: "/assets/images/E-commerce-Icon/iot-banner.webp",
  },

    {
    id: 4,
    title: "  Data-Driven Decisions with BI & Data Analytics",
    description:"Utilize advanced BI tools and data analytics to drive insights and make informed decisions that enhance your eCommerce strategy.",
    image: "/assets/images/E-commerce-Icon/data-banner.webp",
  },
   {
    id: 5,
    title: " Scalable Architecture with Cloud",
    description:"Leverage cloud technologies to build scalable and resilient eCommerce applications that can handle growing traffic and demand.",
    image: "/assets/images/E-commerce-Icon/scalable-banner.webp",
  },
   {
    id: 6,
    title: "  Immersive Shopping with AR/VR",
    description:"Utilize AR/VR technologies to create immersive shopping experiences that engage customers and drive sales.",
    image: "/assets/images/E-commerce-Icon/immersive-banner.webp",
  },
   {
    id: 7,
    title: " Future-Ready Retail with Metaverse Integration",
    description:"Leverage the power of the Metaverse to create immersive and interactive shopping experiences that transcend traditional eCommerce.",
    image: "/assets/images/E-commerce-Icon/retail-banner.webp",
  },
  
];

const DisruptiveTech: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="ecommerce-slider">
      <div className="container">
        <h2 className="section-title">
          We Power Your eCommerce Platform with Disruptive Technologies
        </h2>
        <p className="section-subtitle">
          By embedding sophisticated technologies into the foundation of your
          eCommerce app or software, we enable experiences that are smarter,
          faster, and more engaging. From streamlined operations to predictive
          insights, we help brands unlock new levels of efficiency and growth.
        </p>

        <div className="slider-content">
          <div className="slider-image">
            <img src={slides[activeIndex].image} alt="Slide" />
          </div>
          <div className="slider-text">
            <span className="slide-count">
              {String(activeIndex + 1).padStart(2, "0")} of{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
            <h3>{slides[activeIndex].title}</h3>
            <div className="underline"></div>
            <p>{slides[activeIndex].description}</p>

            {/* Pagination Dots */}
            <div className="pagination-dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                ></span>
              ))}
            </div>

            {/* Arrows */}
            <div className="nav-arrows">
              <button onClick={prevSlide}>&larr;</button>
              <button onClick={nextSlide}>&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisruptiveTech;
