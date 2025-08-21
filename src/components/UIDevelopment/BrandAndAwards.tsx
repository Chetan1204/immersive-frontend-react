import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";


const brandLogos = [
  { src: "/assets/images/UI-Icon/roammate-logo.svg" },
  { src: "/assets/images/UI-Icon/karavan-logo.svg" },
  { src: "/assets/images/UI-Icon/dominoz-logo.svg" },
  { src: "/assets/images/UI-Icon/melltoo-logo.svg" },
    { src: "/assets/images/UI-Icon/google-logo.svg" },
];

const awardLogos = [
  { src: "/assets/images/UI-Icon/clutchbadge.svg" },
  { src: "/assets/images/UI-Icon/mad-certification.webp" },
  { src: "/assets/images/UI-Icon/india-growth-logo.svg" },
  { src: "/assets/images/UI-Icon/good-firm-certification.webp" },
  { src: "/assets/images/UI-Icon/times-business-awards.webp" },
   { src: "/assets/images/UI-Icon/Business-of-Apps.webp" },

];

const sliderConfig = {
  modules: [Autoplay],
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  autoplay: { delay: 2000, disableOnInteraction: false },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
};

const BrandAndAwards: React.FC = () => {
  return (
    <section className="brands-awards">
      <div className="container">
        <h2 className="section-title">We are trusted by brands you believe in</h2>
        <Swiper {...sliderConfig} className="brand-slider">
          {brandLogos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="logo-item">
                <img src={logo.src}  />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="section-title">Recognized by the best</h2>
        <Swiper {...sliderConfig} className="award-slider">
          {awardLogos.map((award, idx) => (
            <SwiperSlide key={idx}>
              <div className="logo-item">
                <img src={award.src}  />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandAndAwards;
