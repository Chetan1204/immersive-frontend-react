
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PerksBenefits = () => {
  return (
    <div className="py-5 perks-benefits">
      <Container>
        <Row className="d-flex align-items-center text-center justify-content-center mx-auto wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
          <Col lg={6} md={6} sm={12}>
            <h2
              className="section-title">
              Perks & Benefits
            </h2>
            <p
              className="benefits-desc mb-4">
              We take care of our team members, so they can deliver their best
              work. Here are a few of the benefits and perks we offer to our
              employees:
            </p>
          </Col>
        </Row>
        <Row className="d-flex row-gap-4">
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <div className="benefits-cards gradient-1">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Open Work Environment</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
            <div className="benefits-cards gradient-2">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Employee’s Provident Fund</div>
            </div>
          </Col>
          <Col lg={4} md={4} className=" wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
            <div className="benefits-cards gradient-3">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Employee’s State Insurances</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <div className="benefits-cards gradient-4">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Appreciation Bonus</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
            <div className="benefits-cards gradient-5">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Performance-Based 
              Compensation & Benefits</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
            <div className="benefits-cards gradient-6">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Leave Policies that Respect 
              Employees</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <div className="benefits-cards gradient-7">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Competitive Salary</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
            <div className="benefits-cards gradient-8">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Exposures on a global scale</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
            <div className="benefits-cards gradient-9">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Celebration of Festival, 
              birthday, & accomplishment</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <div className="benefits-cards gradient-10">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Specialized Pantry Area</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
            <div className="benefits-cards gradient-11">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Immense Learning 
              Opportunities</div>
            </div>
          </Col>
          <Col lg={4} md={4} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
            <div className="benefits-cards gradient-12">
              <img src="assets/images/icon/open-work-culture.svg" alt="" />
              <div className="benefits-card-text">Play & Relax sessions every 
              week</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PerksBenefits;
