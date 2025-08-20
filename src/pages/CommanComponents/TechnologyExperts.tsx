import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const TechnologyExperts: React.FC = () => {
  return (
    <div className="py-5 technology-experts">
      <Container>
        <Row className="d-flex row-gap-4">
          <Col
            lg={6}
            md={6}
            sm={12}
            className="wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.5s"
          >
            <div className="experts-content">
              <h4 className="section-title">Let’s Get Started</h4>
              <p>
                Let’s start executing innovative ideas and turn them into
                scalable results. Talk to us now!
              </p>
            </div>
          </Col>

          <Col
            lg={6}
            md={6}
            sm={12}
            className="wow animate__animated animate__fadeInRight"
            data-wow-delay="0.5s"
          >
            <div className="form-box">
              <Form>
                <Row>
                  <Col lg={12} sm={12}>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={12} sm={12}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={12} sm={12}>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={12} sm={12}>
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={12} sm={12}>
                    <input
                      type="text"
                      placeholder="Organization / Institute"
                      className="form-control"
                    />
                  </Col>
                  {/* <Col lg={6} sm={12}>
                    <label>Job Title</label>
                    <input
                      type="text"
                      placeholder="Job Title"
                      className="form-control"
                    />
                  </Col> */}
                  {/* <Col lg={12} sm={12}>
                    <label>How can we help you?</label>
                    <textarea
                      name="text"
                      placeholder="Your Message"
                      rows={3}
                      className="form-control"
                    />
                  </Col> */}
                  <Col lg={12} sm={12} className="mt-3">
                    <label>
                      <input type="checkbox" className="form-check" />I agree to
                      the privacy policy
                    </label>
                  </Col>
                  <span>
                    You can else email us directly at info@immersiveinfotech.com
                  </span>
                  <Col lg={4} sm={4} className="mt-3">
                    <Button
                      type="submit"
                      className="partner-btn px-5 py-2  btn btn-primary"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TechnologyExperts;
