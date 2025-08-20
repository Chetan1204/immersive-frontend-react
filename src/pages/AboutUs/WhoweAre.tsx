import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

const WhoweAre: React.FC = () => {
  return (
    <div className="py-5 whowe-are">
      <Container>
        <Row className="justify-content-between row-gap-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
          <Col lg={4} md={4} sm={12}>
            <div>
              <h2 className="title-text">
              Who We Are
              </h2>
              <p className="pera-text">
              Apart from our mission and vision of meeting customer goals and satisfaction, we have several other reasons that set us apart from our competitors.
              </p>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} >
          <div className="card-box">
            <div className="flex-content">
              <h5 className="title-text">250+</h5>
               <p>Tech Experts On-board</p>
            </div>
            <img src="assets/images/whoweare.png" alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
          <div className="card-box">
            <div className="flex-content">
              <h5 className="title-text">1032+</h5>
               <p>Web Delivered</p>
            </div>
            <img src="assets/images/whoweare.png" alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
          <div className="card-box">
            <div className="flex-content">
              <h5 className="title-text">952+</h5>
               <p>Our Clients</p>
            </div>
            <img src="assets/images/whoweare.png" alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
          <div className="card-box">
            <div className="flex-content">
              <h5 className="title-text">329+</h5>
               <p>Apps Delivered</p>
            </div>
            <img src="assets/images/whoweare.png" alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
          <div>
              <h2 className="title-text">
              What Drives Us?
              </h2>
              <p className="pera-text">
              Creativity is our heartbeat. We constantly challenge ourselves to further our technical prowess and help our customers to deliver exceptional customer experience              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhoweAre;
