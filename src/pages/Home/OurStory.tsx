import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurStory: React.FC = () => {
  return (
    <div className="py-5 our-story position-relative" id="our-story">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <h2 className="section-title mb-4">Our Story</h2>
            <p className="lead">
              In a world brimming with possibilities, we sprouted, seizing our destiny to create an extraordinary narrative - a tale that encapsulates laughter, tears, challenges, and triumphs.
            </p>
          </Col>
          <Col lg={6} md={12} className="position-relative">
            <div className="video-wrapper">
              <video
                className="custom-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/assets/images/wac.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="dot-overlay">
                <div className="dot dot-1">
                  <div className="dot-content">
                    <h3>700+</h3>
                    <p>High-Impact<br />Projects</p>
                  </div>
                </div>
                <div className="dot dot-2">
                  <div className="dot-content">
                    <h3>600+</h3>
                    <p>International<br />Clients</p>
                  </div>
                </div>
                <div className="dot dot-3">
                  <div className="dot-content">
                    <h3>450+</h3>
                    <p>Dedicated<br />Experts</p>
                  </div>
                </div>
                <div className="dot dot-4">
                  <div className="dot-content">
                    <h3>100+</h3>
                    <p>Brand<br />Connections</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurStory;