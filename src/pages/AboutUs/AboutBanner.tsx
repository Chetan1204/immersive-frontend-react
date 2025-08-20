/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutBanner = () => {
  return (
    <>
      <div className="timetocreate py-5 pt-0">
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

          <Row className="mt-5 ">
            <Col lg={6} md={6} sm={12} className="about-relative wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
            <Row className="about-align">
            <Col lg={12} md={12}>
            <div className="about-text">
                <h1 className="title">
                  It’s time to create impeccable  IT solutions and increase the
                  online presence with the help of a top-rated and most-trusted
                  firm in India.
                </h1>
              </div>
            </Col>   
            <Col lg={5} className="about-work">
            <div className="d-flex align-items-center justify-content-end">
                <div className="me-2">
                <h6 className="title">Unleash your Brand’s potential</h6>
                <p className="mb-0 desc">EXPLORE OUR WORK</p>
                </div>
                <img src="assets/images/1.svg" alt="" />
              </div>
            </Col> 
            </Row>
             

            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="about-right wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                <h4 className="title">
                  Whether you are a small-sized company planning to grow or a
                  large enterprise looking to make your functions simpler, we
                  are here to cater to all your needs.
                </h4>
                <p className="desc">
                  Since our inception, we have only believed in going above and
                  beyond our client's expectations and our capabilities to
                  deliver jaw-dropping outcomes and superior numbers. We
                  priorities fast delivery and perfect solutions to all our
                  customers, irrespective of their location or industry. No
                  matter where you are, what your time zone is or what industry
                  you belong to, our professionals are here to talk to you,
                  understand your needs and vision and meet those needs.
                </p>
                <p className="desc mb-0">
                  Our expertise extends to developing software, games, mobile
                  applications, Ecommerce  and much more in all their forms that
                  you can think of. Immersive Infotech delivers results by
                  utilising prime expertise and best IT solutions to their best
                  potentials to help your business gain online success. Our
                  unparalleled IT services, coupled with other digital marketing
                  and development services, create the right plan that market
                  your brand, convert customers, provide valuable ROI and meet
                  other goals that you may have.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutBanner;
