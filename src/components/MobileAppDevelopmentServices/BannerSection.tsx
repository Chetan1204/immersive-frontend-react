// src/components/BannerSection.jsx
import React from "react";
import { useEffect, useState } from "react";
import AIServices from "./AIServices";
import CounterSection from "./CounterSection";
import DevelopmentExperties from "./DevelopmentExperties";
import TechStack from "./TechStack";
import Description from "./Description";
import Stories from "./Stories";
import ClientReview from "./ClientReview";
// import DevelopmentProcess from "./DevelopmentProcess";
import Contact from "./Contact";
import Faq from "./Faq";
import BlogInsight from "../../pages/Home/BlogInsight";
import "./Mobileapp.css";


const BannerSection = () => {
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
                <h1 className="font-bann"> Mobile App Development Services</h1>
                <p className="pera"> Embrace the future of app development with our scalable solutions built on disruptive
 technologies</p>
               
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

        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="client_logos">
              <div className="trusted_brands horizontal_line text-center">
                <span>Trusted by conglomerates, enterprises, and startups alike</span>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <AIServices/>
    <CounterSection/>
    <DevelopmentExperties/>
    <TechStack/>
    <Description/>
    <Stories/>
    <ClientReview/>
    {/* <DevelopmentProcess/> */}
    <Contact/>
    <Faq/>
    <BlogInsight/>
   
    </>
  );
};

export default BannerSection;
