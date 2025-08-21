import React from "react";
import { useEffect, useState } from "react";
import "./Desktop.css";
import "./Mobile.css";

import AIServices from "./AIServices";
import Counter from "./Counter";
import CustomTechnology from "./CustomTechnology";
import Description from "./Description";
import SuccessStories from "./SuccessStories";
import DevelopmentBlock from "./DevelopmentBlock";
import Tech from "./Tech";
import DevelopmentProcess from "./DevelopmentProcess";
import Blockchainfaq from "./Blockchainfaq";
import BlogInsight from "../../pages/Home/BlogInsight";
import Blockchainartificialintelligence from "./Blockchainartificialintelligence";



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
                <h1 className="font-bann"> Blockchain Development Services</h1>
                <p className="pera">  Tap into the blockchain universe with our world-class custom decentralized solutions</p>
               
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
    <Counter/>
    <CustomTechnology/>
    <Description/>
    <SuccessStories/>
    <DevelopmentBlock/>
    <Tech/>
<Blockchainartificialintelligence />
    <DevelopmentProcess />
    <Blockchainfaq/>
    <BlogInsight/>
    </>
  );
};

export default Banner;
