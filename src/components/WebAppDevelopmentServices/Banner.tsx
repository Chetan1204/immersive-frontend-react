// src/components/BannerSection.jsx
import React from "react";
import { useEffect, useState } from "react";
import "./Desktop.css";
import "./Mobile.css";
import CustomServices from "./CustomServices";
import Counter from "./Counter";
import WhyChooseUs from "./WhyChooseUs";
import Security from "./Security";
import Development from "./Development";
import Tech from "./Tech";
import Faq from "./Faq";
import Contact from "./Contact";
import BlogInsight from "../../pages/Home/BlogInsight";




const Banner = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("bannerSection");
      const overlay = document.getElementById("bannerOverlay");
      const content = document.getElementById("bannerContent");
      const scrollY = window.scrollY;

      setShowHeader(scrollY > 1000);

      if (banner && overlay && content) {
        if (scrollY > 100) {
          banner.classList.add("overlay-active");
        } else {
          banner.classList.remove("overlay-active");
        }

        const isMobile = window.innerWidth <= 768;
        const maxScrollOffset = isMobile ? 240 : 550;
        const scrollOffset = Math.min(scrollY, maxScrollOffset);
        content.style.transform = `translateY(${scrollOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const scrollToElement = ($element: HTMLElement | null): void => {
  if ($element) {
    const offset = 150;
    const elementPosition =
      $element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.error("Element not found:", $element);
  }
};

const handleScroll = () => {
  const banner = document.getElementById("bannerSection");
  const overlay = document.getElementById("bannerOverlay");
  const content = document.getElementById("bannerContent");
  const scrollY = window.scrollY;

  setShowHeader(scrollY > 1000);

  if (banner && overlay && content) {
    if (scrollY > 100) {
      banner.classList.add("overlay-active");
    } else {
      banner.classList.remove("overlay-active");
    }

    const isMobile = window.innerWidth <= 768;
    // Only apply transform if not on mobile
    if (!isMobile) {
      const maxScrollOffset = 550;
      const scrollOffset = Math.min(scrollY, maxScrollOffset);
      content.style.transform = `translateY(${scrollOffset}px)`;
    } else {
      content.style.transform = 'none'; // Reset transform on mobile
    }
  }
};


  return (
    <>
    <section className="app-service-banner" id="bannerSection">
      <div className="bg-line"></div>
      <div className="overlay" id="bannerOverlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="service-app-banner">
              <div className="text-white text-center banner-content" id="bannerContent">
                <h1 className="font-bann"> Industry - Best <br/> Web App Development Services, <br/> Trusted by</h1>
                 <div className="banner-bottom-logos d-flex flex-wrap justify-content-center gap-5">
                {[
                 
                  "continental.svg",
                  "azizi-bank.png",
                  "ssci-white.png",
                  "enkei-white.svg",
                  "caring-approach-white.svg",
                  "tis.png",
                  "qapin.png",
                ].map((logo, index) => (
                  <a href="#" key={index}>
                    <img
                      src={`/assets/images/mobiledevelopmentservices/${logo}`}
                      alt={logo.split(".")[0]}
                      style={{ height: "20px", objectFit: "contain" }}
                      className="img-fluid"
                    />
                  </a>
                ))}
              </div>
               
         <button type="button" className="btn btn-red mob-btn">
  Consult Our Expert <i className="bi bi-arrow-right ms-2"></i>
</button>


              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center video-content">
          <div className="col-lg-12 mt-5">
            <video
              loop
              muted
              autoPlay
              playsInline
              className="w-100"
              style={{ borderRadius: "20px", border: "1px solid #4f4b4b" }}
            >
              <source src="/assets/images/webpagevideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        
      </div>
    </section>

    <CustomServices />
    <Counter />
    <WhyChooseUs />
    <Security />
    <Development />
    <Tech />
    {/* <TechStack/> */}
    <Faq />
    <Contact />
    <BlogInsight />
  
    </>
  );
};

export default Banner;
