import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TransformingBusinesses from "./TransformingBusinesses";
import IndustriesMastered from "./IndustriesMastered";
import DigitalTransformation from "./DigitalTransformation";
import EngineeringExcellence from "./EngineeringExcellence";
import CaseStudies from "./CaseStudies";
import OurSuperheroes from "../CommanComponents/OurSuperheroes";
import GetStarted from "../CommanComponents/GetStarted";
import BlogInsight from "./BlogInsight";
// import Innovate from "./Innovate";
import WOW from "wow.js";
import "animate.css";
import OurStory from "./OurStory";
import LikeHere from "./LikeHere";
 
const HomeTwo = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 680; // Increase if you want the fade to take longer
      const newOpacity = Math.min(scrollTop / maxScroll, 1);
      setOverlayOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
 
  return (
    <>
      <section className="main-banner"
        style={{ position: "relative" }}
      >
        
        <video
          loop
          muted
          autoPlay
          onPlay={(e) => e.currentTarget.play()}
          onLoadedMetadata={(e) => (e.currentTarget.muted = true)}
          className="custom-video"
          poster="assets/images/poster.png"
        >
          <source src="assets/images/webpagevideo.mp4" type="video/mp4" />
        </video>
        <div
        className="overlay"
        style={{
          backgroundColor: "black",
          opacity: overlayOpacity,
          position: "absolute", 
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          transition: "opacity 0.2s ease-out",
          pointerEvents: "none",
        }}
      ></div> 
        <div className="text"  style={{ zIndex: 0 }}>
          <Container>
            <Row className="align-items-center">
            <Col md={6}>
            </Col>
              <Col lg={6} md={6} sm={12}>
                <h1
                  className="banner-heading display-5 mb-4 wow animate__animated animate__fadeInDown"
                  data-wow-delay="0.5s"
                >
                  Bespoke Web and Mobile Solutions Crafted Exclusively for High
                  ROI
                </h1>
                {/* <Col md={8}>
                  <p
                    className="lead mb-4 wow animate__animated animate__fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    If giving your business an instantaneous boost using the
                    dynamic web and mobile technology, is on your plans,
                    Immersive Infotech should be your pick to get started.
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="rounded-pill px-4 py-2 wow animate__animated animate__fadeInDown"
                    data-wow-delay="0.5s"
                  >
                    Consult Our Experts
                  </Button>
                </Col> */}
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* <TransformingBusinesses /> */}
      <CaseStudies />
      <OurStory/>
      <IndustriesMastered />
      <EngineeringExcellence />
      <DigitalTransformation />
      <LikeHere />
      {/* <Innovate /> */}
     
      <OurSuperheroes />
      <GetStarted />
      <BlogInsight />
    </>
  );
};
 
export default HomeTwo;