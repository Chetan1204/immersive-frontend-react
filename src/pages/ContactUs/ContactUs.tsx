import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import WOW from "wow.js";
import "animate.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const ContactUs: React.FC = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <section className="contact-us">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12}>
              <h1 className="banner-heading">
                Let’s Talk & Bring Your <br /> Ideas To Life!
              </h1>
              <p className="banner-desc mb-4">
                Whether you’re looking for a demo, have a support question or a
                business query get in touch.
              </p>
              <Link to="#" className="partner-btn">
                For Career
              </Link>
            </Col>
            <Col lg={6} className="form-position">
              <div className="contact-form-wrapper">
                <h2 className="form-heading mb-2">We’re here to help.</h2>
                <p className="form-subheading mb-4">
                  Drop us a line about your project. All submitted information
                  will be kept confidential.
                </p>
                <Form>
                  <Row>
                    <Col lg={6} className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <Form.Control type="text" name="" />
                    </Col>
                    <Col lg={6} className="mb-3">
                      <label htmlFor="email" className="form-label">
                        E-mail ID
                      </label>
                      <Form.Control type="email" name="email" />
                    </Col>
                    <Col lg={6} className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Mobile Number
                      </label>
                      <Form.Control type="text" name="phone" />
                    </Col>
                    <Col lg={6} className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Services
                      </label>
                      <Form.Control type="text" name="services" />
                    </Col>
                    <Col lg={6} className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Organization / Institute
                      </label>
                      <Form.Control type="text" name="organization-institute" />
                    </Col>
                    <Col lg={6} className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Budget
                      </label>
                      <Form.Control type="text" name="budget" />
                    </Col>
                    <Col lg={12} className="mb-3">
                      <label htmlFor="email" className="form-label">
                        About the project
                      </label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="aboutproject"
                      />
                    </Col>
                    <Col lg={12}>
                      <Row className="align-items-center">
                        <Col lg={8}>
                          <div className="d-flex align-items-center">
                            <input
                              type="checkbox"
                              id="privacyCheck"
                              className="form-check-input me-2"
                            />
                            <Form.Label htmlFor="privacyCheck" className="mb-0">
                              I agree to the privacy policy
                            </Form.Label>
                          </div>

                          <p className="contact-email pb-0 mb-0">
                            You can else email us directly at
                            <a href="mailto:info@immersiveinfotech.com">
                              {" "}
                              info@immersiveinfotech.com
                            </a>
                          </p>
                        </Col>
                        <Col lg={4} className=" text-end">
                          <Button type="submit" className="submit-btn">
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="form-section">
        <Container>
          <Row className="py-5">
            <Col lg={6} sm={12} md={6}>
              <div className="global-brands">
                <h1 className="brands-text">
                  Trusted by Leading Global Brands
                </h1>

                <div className="brands-icon row-gap-4 d-flex flex-wrap gap-4 mt-3 justify-content-center">
                  <img src="assets/images/icon/grobiome.svg" alt="" />

                  <img src="assets/images/icon/candor.svg" alt="" />

                  <img src="assets/images/icon/canadian.svg" alt="" />

                  <img src="assets/images/icon/unicharm.svg" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="location-contact-section">
        <Container>
          <Row className="py-5">
            <Col lg={5}>
              <div className="location-details">
                <h1 className="section-title">Our Locations</h1>
                <p className="section-subtext">
                  We’ll connect you with the right person
                </p>
                <img
                  src="assets/images/contact-img.png"
                  alt="Our Office"
                  className="img-fluid"
                />
                <div className="d-flex location-flag align-items-center mt-4 gap-3 mb-3">
                  <img src="assets/images/flag.svg" alt="India Flag" />
                  <span>INDIA - MP</span>
                </div>
                <p className="location-address">
                  604 Atulya IT Park Next to Crystal IT Park Bhawarkua Main Rd ,
                  Khandwa Naka Indore , Madhya Pradesh 452014
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="contact-methods">
                <h1 className="section-title">
                  Different Modes To Connect With Us
                </h1>
                <p className="section-subtext">
                  To build a wonderful relationship with our clients and
                  visitors we are reachable through multiple modes.
                </p>
              </div>
              <Row className="row-gap-4">
                <Col lg={6}>
                  <div className="contact-box">
                    <div className="contact-title d-flex align-items-center gap-3">
                      {/* <FontAwesomeIcon icon={faHeadphones} /> */}
                      <img src="assets/images/icon/headphones.svg" alt="" />
                      <span>Sales Enquiry</span>
                    </div>
                    <div className="contact-details d-flex justify-content-between align-items-center gap-3">
                      <div className="d-flex align-items-center gap-3">
                        <img src="assets/images/icon/phone-call.svg" alt="" />
                        <span>+91 888-980-0028</span>
                      </div>
                      <Link to="">Get in touch</Link>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="contact-box">
                    <div className="contact-title d-flex align-items-center gap-3">
                      <img src="assets/images/icon/user.svg" alt="" />
                      <span>General Inquiry</span>
                    </div>
                    <div className="contact-details d-flex justify-content-between align-items-center gap-3">
                      <div className="d-flex align-items-center gap-3">
                        <img src="assets/images/icon/phone-call.svg" alt="" />
                        <span>+91 888-980-0028</span>
                      </div>
                      <Link to="" className="get-btn">
                        Get in touch
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="contact-box">
                    <div className="contact-title d-flex align-items-center gap-3">
             
                      <img src="assets/images/icon/person.svg" alt="" />
                      <span>HR Department</span>
                    </div>
                    <div className="contact-details d-flex align-items-center gap-3">
                      <img src="assets/images/icon/phone-call.svg" alt="" />
                      <span>+91 888-921-1113</span>
                    </div>
                    <div className="contact-details d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <img src="assets/images/icon/mail.svg" alt="" />
                        <span>hr@immersiveinfotech.com</span>
                      </div>
                      <Link to="">Get in touch</Link>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="contact-box">
                    <div className="contact-title d-flex align-items-center gap-3">
                      <img src="assets/images/icon/user.svg" alt="" />
                      <span>Staff Augmentation</span>
                    </div>
                    <div className="contact-details d-flex align-items-center gap-3">
                      <img src="assets/images/icon/phone-call.svg" alt="" />
                      <span>+91 913-140-8731</span>
                    </div>
                    <div className="contact-details d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <img src="assets/images/icon/mail.svg" alt="" />
                        <span>info@immersiveinfotech.com</span>
                      </div>
                      <Link to="">Get in touch</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactUs;
