import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Innovate: React.FC = () => {
  return (
    <div className="py-5 pt-0 innovate">
      <Container>
        <Row>
          <Col lg={10} md={10} sm={12}>
            <div className="mb-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
              <h1>
                We Create New Solution And Transform Existing Ones With
                Technologies That Beat Industry-Best Timelines
              </h1>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-center row-gap-4">
          <Col lg={12} md={12} sm={12}>
            <Row className="justify-content-between align-items-center">
              <div className="section-hover wow animate__animated animate__fadeInLeft" data-wow-delay="0.1s">
                <div className="innovate-box border-bottom">
                  <Col lg={1}>
                    <div className="num">01</div>
                  </Col>
                  <Col lg={4}>
                    <div className="title">Artificial Intelligence</div>
                  </Col>
                  <Col lg={4}>
                    <div className="desc">
                      We leverage AI to craft intelligent solutions that
                      streamline operations and enhance decision-making
                      capabilities.
                    </div>
                  </Col>
                  <Col lg={2}>
                    <div className="hover-img">
                      <img src="assets/images/maskgroup.png" alt="" />
                    </div>
                  </Col>
                  <Col lg={1}>
                    <div className="icon">
                      <img
                        src="assets/images/artificial-intelligence.svg"
                        alt=""
                      />
                    </div>
                  </Col>
                </div>
              </div>
            </Row>
            <Row className="justify-content-between align-items-center">
              <div className="section-hover wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">
                <div className="innovate-box border-bottom">
                  <Col lg={1}>
                    <div className="num">02</div>
                  </Col>
                  <Col lg={4}>
                    <div className="title">Generative AI</div>
                  </Col>
                  <Col lg={4}>
                    <div className="desc">
                      We utilize Generative AI technology to create solutions
                      that produce new content, automate creative processes and
                      enhance user experiences.
                    </div>
                  </Col>
                  <Col lg={2}>
                    <div className="hover-img">
                      <img src="assets/images/maskgroup.png" alt="" />
                    </div>
                  </Col>
                  <Col lg={1}>
                    <div className="icon">
                      <img src="assets/images/generative-ai.svg" alt="" />
                    </div>
                  </Col>
                </div>
              </div>
            </Row>
            <Row className="justify-content-between align-items-center">
              <div className="section-hover wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s">
                <div className="innovate-box border-bottom">
                  <Col lg={1}>
                    <div className="num">03</div>
                  </Col>
                  <Col lg={4}>
                    <div className="title">Machine Learning</div>
                  </Col>
                  <Col lg={4}>
                    <div className="desc">
                      We use ML to build intelligent systems that analyze data
                      patterns and predict outcomes while continuously improving
                      operations.
                    </div>
                  </Col>
                  <Col lg={2}>
                    <div className="hover-img">
                      <img src="assets/images/maskgroup.png" alt="" />
                    </div>
                  </Col>
                  <Col lg={1}>
                    <div className="icon">
                      <img src="assets/images/machine-learning.svg" alt="" />
                    </div>
                  </Col>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Innovate;
