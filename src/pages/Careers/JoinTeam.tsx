
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const JoinTeam = () => {
  return (
      <div className="py-5 transforming-businesses">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6} md={6} sm={12}>
              <h2 className="section-title display-5 mb-4 wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s">
              Join the Immersive Infotech <br /> team!
              </h2>
              <p className="lead mb-3 wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s">
              Innovate with the latest and greatest technologies & get to work on some of the coolest projects you can imagine.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row className="d-flex align-items-end text-left">
              <Col lg={6} md={6} className="transforming-right-img wow animate__animated animate__fadeInRight" data-wow-delay="0.5s">
                  <img
                    src="/assets/images/jointeam3.png"
                    className="img-fluid"
                    alt="teamwork"
                  />
                </Col>
                <Col lg={6} md={6} className="transforming-left-img wow animate__animated animate__fadeInRight" data-wow-delay="0.5s">
                  <Image
                    src="/assets/images/jointeam1.png"
                    className="img-fluid mb-3"
                    alt="programmer"
                  />
                  <img
                    src="/assets/images/jointeam2.png"
                    className="img-fluid"
                    alt="gitdiscuss"
                  />
                </Col>
               
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default JoinTeam;
