import {useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import WOW from "wow.js";
import "animate.css";
import { Link } from 'react-router-dom';
import JoinTeam from './JoinTeam';
import ImmersiveLife from '../AboutUs/ImmersiveLife';
import PerksBenefits from './PerksBenefits';
import CurrentOpenings from './CurrentOpenings';
import React from 'react';

const Careers = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init(); 
  }, []);

  
  return (
    <>
      <section className="careers ">
        <Container>
          <Row className="align-items-center justify-content-around py-5">
            <Col lg={6} md={6} sm={12}>
              <h1 className="banner-heading text-center wow animate__animated animate__fadeInDown" data-wow-delay="0.5s">
              Join Us On A Journey to Digital
              Innovation and Technology Excellence
              </h1>
            </Col>

            <Col lg={8} md={8} sm={12} className="text-center">
              <p className='banner-desc text-center mb-4 wow animate__animated animate__fadeInDown' data-wow-delay="0.5s">
                We believe in harnessing the collective brilliance of our diverse talents to craft innovative solutions and contribute to the ever-evolving digital landscape. Ready to join us and be at the forefront of transformative projects, taking your career in IT beyond limits?
              </p>

            <Link to="#" className="partner-btn wow animate__animated animate__fadeInDown" data-wow-delay="0.5s">
              View Current Opedning
            </Link>
            </Col>
          </Row>
        </Container>

 
        
        <JoinTeam />
        <PerksBenefits />
        <CurrentOpenings />
        <div className="timetocreate">
                <Container>
                  <Row className="align-items-center justify-content-around">
                    <Col lg={12} md={12} sm={12}>
                      <div className="about-banner position-relative wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                        <img
                          src="assets/images/aboutbanner.png"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="overlay"></div>
                      </div>
                    </Col>
                  </Row>
                  </Container>
                  </div>
        <ImmersiveLife />
      </section>
    </>
  );
}

export default Careers;
