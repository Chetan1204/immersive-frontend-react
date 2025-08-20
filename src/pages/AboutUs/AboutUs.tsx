/* eslint-disable no-irregular-whitespace */
import {useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import AboutBanner from './AboutBanner';
import OurSuperheroes from '../CommanComponents/OurSuperheroes';
import GetStarted from '../CommanComponents/GetStarted';
import WhoweAre from './WhoweAre';
import WhyImmersive from './WhyImmersive';
import TeamExperience from './TeamExperience';
import LargestglobalBrands from './LargestglobalBrands';
import ImmersiveLife from './ImmersiveLife';
import WOW from "wow.js";
import "animate.css";
import React from 'react';

const AboutUs = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init(); 
  }, []);

  
  return (
    <>
      <section className="about-us">

        <Container>
          <Row className="align-items-center justify-content-around">
            <Col lg={9} md={9} sm={12}>
              <h1 className="banner-heading display-5 mb-4 text-center wow animate__animated animate__fadeInDown" data-wow-delay="0.5s">
              The modern-day digital world is getting 
              competitive and congestive. 
              </h1>
            </Col>
            <Col lg={7} md={7} sm={12}>
              <p className='banner-desc text-center mb-5 wow animate__animated animate__fadeInDown' data-wow-delay="0.5s">Founded in 2012, Immersive Infotech gathered a team of experts specializing in marketing, developing and designing websites, mobile applications, games and online platforms of all kinds.</p>
            </Col>
          </Row>
        </Container>
        <AboutBanner />
      <WhoweAre />
      <WhyImmersive />
 
      <LargestglobalBrands />
      <ImmersiveLife />
      <TeamExperience />
      <OurSuperheroes />
      <GetStarted />
      </section>

      
      
     

    </>
  );
}

export default AboutUs;
