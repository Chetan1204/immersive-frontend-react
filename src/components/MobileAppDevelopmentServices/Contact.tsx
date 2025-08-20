import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <div className="py-5 pt-0 getstarted">
      {/*<Container>
        <Row className="d-flex row-gap-4">
          <Col
            lg={6}
            md={6}
            sm={12}
            className="wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.5s"
          >
            <div className="getstarted-content">
              <h4 className="section-title">Let’s Get Started</h4>
              <p>
                Let’s start executing innovative ideas and turn them into
                scalable results. Talk to us now!
              </p>
            </div>
            <div className="address">
              <ul>
                <li>
                  <span>
                    <img src="assets/images/map-pin.svg" alt="Location" />
                  </span>
                  604, Atulya IT Park Next to Crystal IT Park, Bhawarkua Main
                  Rd, Khandwa Naka, Indore, Madhya Pradesh 452014
                </li>
                <li>
                  <span>
                    <img src="assets/images/mail.svg" alt="Email" />
                  </span>
                  info@immersiveinfotech.com
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <strong>Follow Us</strong>
              <div className="d-flex">
                <Link to="#">
                  <img src="assets/images/facebook.svg" alt="Facebook" />
                </Link>
                <Link to="#">
                  <img src="assets/images/instagram.svg" alt="Instagram" />
                </Link>
                <Link to="#">
                  <img src="assets/images/linkedin.svg" alt="LinkedIn" />
                </Link>
              </div>
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
                  <Col lg={6} sm={12}>
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={6} sm={12}>
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={6} sm={12}>
                    <label>Email Id</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={6} sm={12}>
                    <label>Contact Number</label>
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={6} sm={12}>
                    <label>Organization / Institute</label>
                    <input
                      type="text"
                      placeholder="Organization / Institute"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={6} sm={12}>
                    <label>Job Title</label>
                    <input
                      type="text"
                      placeholder="Job Title"
                      className="form-control"
                    />
                  </Col>
                  <Col lg={12} sm={12}>
                    <label>How can we help you?</label>
                    <textarea
                      name="text"
                      placeholder="Your Message"
                      rows={3}
                      className="form-control"
                    />
                  </Col>
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
      </Container>*/}
      <section className="contact-hero-section">
          <Row className="w-100">
            {/* Left Side - Gradient Text Section */}
            <Col md={6} className="text-section d-flex align-items-center justify-content-center">
              <div className="text-white wow animate__animated animate__fadeInLeft"
                data-wow-delay="0.5s">
                <h1 className="display-5 fw-bold">Our Technology Experts Are<br />Change Catalysts</h1>
                <p className="lead">Book A Free Consultation Call With Our Experts Today</p>
              </div>
            </Col>

            {/* Right Side - Form Section */}
            <Col md={6} className="form-section d-flex align-items-center justify-content-center">
              <div className="form-box p-4 rounded shadow-lg bg-dark text-white w-100 wow animate__animated animate__fadeInRight"
            data-wow-delay="0.5s" style={{ maxWidth: '600px' }}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Email ID*" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="tel" placeholder="Contact Number" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select a Budget Range</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={3} placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)*" />
                  </Form.Group>

                  
                  <Form.Group className="mb-3">
                    <Row>
                      <Col md={8}>
                        <Form.Check 
                          type="checkbox" 
                          label="Include Copy of a Non-Disclosure Agreement" 
                          className="w-100 checkbox d-flex align-items-center"
                        />
                      </Col>
                      <Col md={4}>
                        <div className="w-100 d-flex align-items-center count">
                          <Form.Label className="mb-0 mt-0">7 + 7 =</Form.Label>
                          <Form.Control type="text" style={{ maxWidth: "80px" }} />
                        </div>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Request Proposal
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </section>
    </div>
  );
};

export default Contact;
