
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const IndustriesMastered = () => {
  return (
    <>
      <section className="py-5 industries-mastered">
        <Container>
          <Row className="d-flex align-items-center row-gap-4">
            <Col lg={4} md={4} sm={12} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <div className="industry-box">
                <div className="industry-box-inner d-flex align-items-center gap-5 pb-2">
                  <span>35+</span>
                  <h6 className="section-title mb-0">Industries Mastered</h6>
                </div>
                <p>
                  With our agility & engineering expertise, we equip your
                  critical business functions with customized tech, and expand
                  digital capabilities.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <div className="industry-box">
                <div className="industry-box-inner d-flex align-items-center gap-5 pb-2">
                  <span>1600+</span>
                  <h6 className="section-title mb-0">Tech Evangelists</h6>
                </div>
                <p>
                We are a dynamic team of technology enthusiasts and experts passionately driven to achieve the best results for our clients. 
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <div className="industry-box">
                <div className="industry-box-inner d-flex align-items-center gap-5 pb-2">
                  <span>3000+</span>
                  <h6 className="section-title mb-0">Solution Designed
                  & Delivered</h6>
                </div>
                <p>
                We have empowered business with thousands of successful futuristic solutions that have helped them grow and scale.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
            <div className="industry-box">
                <div className="industry-box-inner d-flex align-items-center gap-5 pb-2">
                  <span>500+</span>
                  <h6 className="section-title mb-0">Legacy Processes 
                  Transformed</h6>
                </div>
                <p>
                We help businesses achieve their digital transformation goals by seamlessly integrating cutting-edge technologies into their legacy systems.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
            <div className="industry-box">
                <div className="industry-box-inner d-flex align-items-center gap-5 pb-2">
                  <span>05+</span>
                  <h6 className="section-title mb-0">Strategic Federal 
                  Partnerships</h6>
                </div>
                <p>
                We drive collaborative initiatives that address critical challenges and deliver impactful solutions.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
            <div className="industry-box">
                <div className="industry-box-inner d-flex align-items-center pb-2">
            
                  <h6 className="section-title mb-4">Ready to innovate and <br />
                  drive an impact?</h6>
                </div>
                <Button className="partner-btn px-4 py-2">
                   <Link to="#">Partner with us</Link>   
                </Button>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default IndustriesMastered;
