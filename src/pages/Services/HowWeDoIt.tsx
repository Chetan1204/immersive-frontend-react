/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const steps = [
  { number: "01", title: "Research" },
  { number: "02", title: "Wireframing" },
  { number: "03", title: "Visual Style" },
  { number: "04", title: "Design & Delivery" },
];

const HowWeDoIt: React.FC = () => {
  return (
    <>
    <div className="how-we-do-it text-center py-5">
      <h2 className="section-title mb-5">How we do it?</h2>
      <Container>
        <Row className="position-relative">
          {steps.map((step, index) => (
            <Col md={12} lg={3} className="col-12  mb-4 mb-lg-0" key={index}>
              <div className="step-item">
                <h3 className="step-number">{step.number}</h3>
                <div className="step-dot"></div>
                <h4 className="step-title mt-3">{step.title}</h4>
                <p className="step-desc mt-2">
                  We mostly work on a fixed-bid basis for our projects, focusing on a select few clients at a time.
                </p>
              </div>
            </Col>
          ))}
          <div className="horizontal-line d-none d-lg-block"></div>
        </Row>
      </Container>
    </div>


    <div className="discovery-section py-5">
      <Container>
        <Row>
            <Col md={6} lg={6} sm={12}>
              <div className="discovery-consulting">
                <h2 className="section-title mb-4">Discovery & Consulting</h2>
                <p className="section-desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p className="section-desc">
                Our expert consultants offer valuable insights and recommendations, ensuring that the resulting mobile apps and websites are tailored to meet the specific needs of our clients and their target audience. We combine cutting-edge technologies, user-centered design principles, and industry best practices to deliver high-quality solutions.
                </p>
                <p className="section-desc">
                Whether it's ideation, market research, competitor analysis, or feasibility studies, our Discovery & Consulting services enable businesses to make informed decisions and lay a strong foundation for successful mobile app and web development projects. With a focus on innovation, usability, and scalability, we help our clients unlock their digital potential and achieve their business objectives.
                </p>

              </div>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <div className="discovery-img">
                  <img src="assets/images/services-image.png" alt="" className="img-fluid"  />
              </div>
            </Col>
       
        </Row>

        <Row className="mt-5">
        <Col md={6} lg={6} sm={12}>
              <div className="discovery-img">
                  <img src="assets/images/high-angle-hands-holding-paper.png" alt="" className="img-fluid"  />
              </div>
            </Col>
            <Col md={6} lg={6} sm={12}>
              <div className="discovery-consulting">
                <h2 className="section-title mb-4">Get Engaging Experiences With Immersive 
                Designs.</h2>
                <ul className="section-list">
                    <li>
                        <span>Business Oriented Design</span>
                        <p className="list-desc">We build design intending to add value to your business by offering an interactive experience with an aesthetic appeal to build a trustable relationship among customers.</p>
                    </li>
                    <li>
                        <span>Innovative Thinkers</span>
                        <p className="list-desc">Every client and their business demands are unique – to accomplish that our designers think unusually for each client to deliver unique user experience.</p>
                    </li>
                    <li>
                        <span>Design Personalized Customer Experience</span>
                        <p className="list-desc">To promote engagement and enhance user experience, we craft highly-personalized experiences in the designed solutions.</p>
                    </li>
                    <li>
                        <span>Usability & User-Oriented Design</span>
                        <p className="list-desc">Our creative designing team always aims to build solutions that fulfil users’ goals, objectives, and requirements at every designing phase.</p>
                    </li>
                </ul>
              </div>
            </Col>
 
       
        </Row>
      </Container>
    </div>
    </>
  );
};

export default HowWeDoIt;
