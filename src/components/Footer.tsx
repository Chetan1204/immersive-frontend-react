import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-black py-5 pb-0">
      <div className="container">
        <Row className="g-4">
          <Col lg={12} md={12} sm={12}>
            <div className="row align-items-center">
              <Col lg={3} md={3} sm={12}>
                <div className="footer-heading d-flex">
                  <img src="/logo-white-new.svg" alt="" className="img-fluid" />
                  {/* <h5>Get started now!</h5>*/}                  
                </div>
              </Col>
              <Col lg={3}>
              <p className="text-white">Connect people and spaces</p>
              </Col>
              {/* <Col lg={6} md={6} sm={12}>
                <div className="text-end">
                <Link to="" className="partner-btn">
                Request a quote
                    </Link>
                </div>
              </Col> */}
            </div>
          </Col>
          {/* Company Column */}
          <Col lg={12} md={12} sm={12}>
            <Row>
              <Col lg={3}>
                {/* <h5 className="mb-3 text-white list-heading">Company</h5> */}
                <ul className="list-unstyled">
                  <li>
                    <Link to="#" className="">
                      {/* About Us */}
                      Product overview
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Careers */}
                      Deployment options
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Contact Us */}
                      Benefits of Kisi
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Our Portfolio */}
                      Why Kisi
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* CEO's Desk */}
                      Kisi for enterprise
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Wall of Love */}
                      Product accessories
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Our Client */}
                      Compatible hardware
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Blog */}
                      Watch demo
                    </Link>
                  </li>
                </ul>
              </Col>

              {/* Services Column */}
              <Col lg={3}>
                {/* <h5 className="mb-3 text-white list-heading">Services</h5> */}
                <ul className="list-unstyled">
                  <li>
                    <Link to="#" className="">
                      {/* Web App Development */}
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Mobile App Development */}
                      Reseller program
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Blockchain Development */}
                      Product docs
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* UI/UX Development */}
                      HelpSpace
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* E-commerce Development */}
                      Learning hub
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* WordPress Development */}
                      Kisi Academy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Digital Marketing */}
                      Kisi API
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/full-stack-development" className="">
                      Full Stack Development
                    </Link>
                  </li> */}
                </ul>
              </Col>

              {/* Technology Column */}
              <Col lg={3}>
                {/* <h5 className="mb-3 text-white list-heading">Technology</h5> */}
                <ul className="list-unstyled">
                  <li>
                    <Link to="#" className="">
                      {/* Hire Dedicated PHP Developers */}
                      Brand resources
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us" className="">
                      {/* Hire.NET Developers */}
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/career" className="">
                      {/* Hire NodeJS Developers */}
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="">
                      {/* Hire Python Developers */}
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Hire Angular Developers */}
                      Case studies
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Hire VueJs Developers */}
                      Downloads
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Hire ReactJS Developer */}
                      Office occupancy index
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="">
                      {/* Hire Flutter Developers */}
                      Kisi Connect
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="">
                      {/* Hire Flutter Developers */}
                      Blog
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3}>
                <h5 className="mb-3 text-white list-heading">Technology</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#" className="">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:080-6218-0491" className="">
                      Sales: 080-6218-0491 
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <Row>
              <Col lg={3}>
                <div className="legla-div">
                  <p>
                    <strong>Legal:</strong>
                    <a href="#">Terms</a>|
                    <a href="#">Privacy</a>|
                    <a href="#">Cookies</a>|
                    <a href="#">End User Agreement</a>|
                    <a href="#">Master Services Agreement</a>|
                    <a href="#">Apple Pay Terms and Conditions</a>|
                    <a href="#">GDPR</a>|
                    <a href="#">DPA</a>|
                    <a href="#">Standard Service Level Commitment</a>|
                    <a href="#">NDAA</a>
                    <p>© Immersive Infotech Pvt. Ltd.</p>
                  </p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="legla-div">
                  <div className="addresh-div">
                    <p>
                      <strong>Location</strong>
                  <br />
                     <a href=""> 604, Atulya IT Park Next to Crystal IT Park, Bhawarkua Main Rd, Khandwa Naka, Indore,</a>
                    </p>
                   
                  </div>
                </div>
              </Col>
              <Col lg={3}>
      
                  <div className="addresh-div">
                  <p><a href="#">LinkedIn</a></p>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Instagram</a></p>

                   
                  </div>
                
              </Col>             
               <Col lg={3}>
      
                  <div className="newsletter">
                 
          <label htmlFor="newsletter">Subscribe to our newsletter!*</label>
          <input type="email" placeholder="name@company.com" />
          <button type="submit">Submit</button>
       
                   
                  </div>
                
              </Col>
            </Row>
          </Col>
          {/* Connect Column */}
          {/* <Col lg={4} md={4} sm={12}>
            <Row>
            <h5 className="mb-3 text-white list-heading">Connect</h5>
              <Col lg={6}>
               
                <ul className="list-unstyled">
                  <li>
                    <Link to="/general-enquiry" className="">
                      General Enquiry
                    </Link>
                  </li>
                  <li>
                    <Link to="/sales-enquiry" className="">
                      Sales Enquiry
                    </Link>
                  </li>
                  <li>
                    <Link to="/staff-augmentation" className="">
                      Staff Augmentation
                    </Link>
                  </li>
                  <li>
                    <Link to="hr-enquiry" className="">
                      HR Enquiry
                    </Link>
                  </li>
                  <li>
                    <Link to="email" className="">
                      Email
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={6}>
                <ul className="list-unstyled contact-details">
                  <li> <Link to="tel:+91 888-921-1113">: +91 888-921-1113</Link></li>
                  <li> <Link to="tel:+91 888-980-0028">: +91 888-980-0028</Link></li>
                  <li> <Link to="tel:+91 913-140-8731">: +91 913-140-8731</Link></li>
                  <li> <Link to="mailto:info@immersiveinfotech.com">info@immersiveinfotech.com</Link></li>
                  <li> <Link to="mailto:hr@immersiveinfotech.com">hr@immersiveinfotech.com</Link></li>
                </ul>
              </Col>
              <Col lg={12}>
                <h5 className=" mb-3 text-white list-heading">Follow Us</h5>
                <div className="d-flex gap-5">
                
                  <Link to="#" className="">
                  <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "25px" }} />
                  </Link>
                  <Link to="#" className="">
                  <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "25px" }} />
                  </Link>
                  <Link to="#" className="">
                  <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "25px" }} />
                  </Link>
                  <Link to="#" className="">
                  <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "25px" }} />
                  </Link>
                  <Link to="#" className="">
                  <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "25px" }} />
                  </Link> 
                  
                </div>
              </Col>
            </Row>
          </Col> */}
        </Row>

        {/* Copyright Section */}
        <Row className="mt-2 copyright ">
          <Col lg={12} md={12} sm={12}>
            <p className="text-white text-center mb-0">
              © 2025, Immersive Infotech. All Rights Reserved
            </p>
          </Col>
          {/* <Col lg={3} md={3} sm={12} className="text-end policy-page">
            <Link to="">Privacy Policy</Link>
            <span>|</span>
            <Link to="">Terms & Conditions </Link>
          </Col> */}
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
