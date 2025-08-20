import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WOW from "wow.js";
import "animate.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import HowWeDoIt from "./HowWeDoIt";
import DesignTools from "./DesignTools";
import DesignServices from "./DesignServices";

const teamData = [
  {
    skill: "UI/UX Design",
    title: "Creating Addictive Product Experiences With Our UI/UX Design Services",
    description:
      "With our defined approach and step by step process, we deliver beyond what's expected. Our team doesn’t limit itself to delivering a product. We craft brilliance together and deliver experiences that are ever-evolving.",
      cards: [
        {
          title: "UI/UX Web Design",
          description: "Crafting seamless and visually appealing interfaces that enhance user engagement and drive conversion across web platforms.",
        },
        {
          title: "UI/UX Mobile Design",
          description: "Designing intuitive mobile experiences that prioritize usability and smooth navigation on all screen sizes.",
        },
        {
          title: "Visual Design",
          description: "Focusing on aesthetics and consistency to ensure the look and feel of your product aligns with your brand identity.",
        },
        {
          title: "Interaction Design",
          description: "Defining how users interact with your product, ensuring smooth, logical, and satisfying experiences.",
        },
      ]
      
  },
  {
    skill: "Graphics Design",
    title: "Powerful Visual Communication with Graphics Design",
    description:
      "We create stunning visual content to communicate your message. From logos to social media creatives, everything is custom-crafted for impact.",
      cards: [
        {
          title: "Logo Design",
          description: "Creating memorable logos that represent your brand’s personality and leave a lasting impression.",
        },
        {
          title: "Brochure Design",
          description: "Designing professional brochures that effectively communicate your offerings and brand story.",
        },
        {
          title: "Social Media Design",
          description: "Delivering visually engaging content tailored for maximum impact on social platforms.",
        },
        {
          title: "Brand Guidelines",
          description: "Establishing clear visual and verbal rules to maintain brand consistency across all channels.",
        },
      ]      
  },
  {
    skill: "Mobile App Development",
    title: "Building Smooth, Scalable Mobile Applications",
    description:
      "We design and develop Android & iOS apps that are scalable, intuitive, and user-centric, blending performance and aesthetics.",
      cards: [
        {
          title: "iOS App Development",
          description: "Building sleek and high-performance iOS applications tailored for Apple’s ecosystem.",
        },
        {
          title: "Android App Development",
          description: "Developing scalable and feature-rich Android apps that perform seamlessly on all devices.",
        },
        {
          title: "Flutter Development",
          description: "Creating beautiful cross-platform apps using Flutter for faster time to market and native performance.",
        },
        {
          title: "App Maintenance",
          description: "Providing continuous updates and support to keep your apps secure, functional, and up-to-date.",
        },
      ]
      
  },
  {
    skill: "Software Development",
    title: "Tailored Software Development Solutions",
    description:
      "We deliver custom software solutions built to solve real business problems and streamline operations effectively.",
      cards: [
        {
          title: "Enterprise Software",
          description: "Developing robust software systems that support complex operations for large-scale enterprises.",
        },
        {
          title: "CRM Systems",
          description: "Custom CRM solutions that help businesses manage client relationships more effectively.",
        },
        {
          title: "Custom ERP",
          description: "Designing ERP solutions to integrate and streamline your core business processes in one platform.",
        },
        {
          title: "Cloud Integration",
          description: "Enabling digital transformation through seamless integration with cloud platforms and services.",
        },
      ]
      
  },
  {
    skill: "Web Development",
    title: "Responsive & Fast Web Development Services",
    description:
      "We develop SEO-friendly, mobile-optimized websites that offer great user experience and performance.",
      cards: [
        {
          title: "Front-end Development",
          description: "Building responsive, accessible, and interactive user interfaces using modern technologies.",
        },
        {
          title: "Back-end Development",
          description: "Developing powerful server-side systems to support complex applications and business logic.",
        },
        {
          title: "CMS Development",
          description: "Creating custom content management systems that empower you to easily manage your website.",
        },
        {
          title: "E-commerce Development",
          description: "Designing and building secure, scalable e-commerce platforms to grow your online business.",
        },
      ]
      
  },
];

const Services = () => {
  const [selectedMember, setSelectedMember] = useState(teamData[0]);

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <section className="main-services">
      <div className="banner-image">
        <Container>
          <Row className="align-items-center pt-5">
            <Col lg={5} md={5} sm={12}>
              <h1
                className="banner-heading display-5 wow animate__animated animate__fadeInDown"
                data-wow-delay="0.5s"
              >
                We make design that lead and inspire.
              </h1>
            </Col>
            <Col lg={7} md={7} sm={12}>
              <p
                className="banner-desc wow animate__animated animate__fadeInDown"
                data-wow-delay="0.5s"
              >
                We take a similar approach to design commercial we do
                impactfully approache, over the flowchart of user friendly
                wireframe.
              </p>
            </Col>
            <Col lg={12}>
              <Col lg={3} className="pt-4">
                <Link to="#" className="partner-btn">
                  Let’s Talk
                </Link>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="service-devlop accordion-item">
        <Container className="service-padding">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="service-flex">
                {teamData.map((member, index) => (
                  <div key={index} className="service-member">
                    <h6
                      onClick={() => setSelectedMember(member)}
                      className={
                        selectedMember.skill === member.skill ? "active" : ""
                      }
                    >
                      {member.skill}
                    </h6>
                   
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={8} >
              <div className="services-content">
                <h4>{selectedMember.title}</h4>
                <p>{selectedMember.description}</p>
              </div>
            </Col>
          </Row>

          {/* Tab-based Service Cards */}
          <Row className="mt-3 service-card">
            {selectedMember.cards?.map((card, index) => (
              <Col key={index} lg={3} className="service-border">
                <div className="service-card-box">
                  <div className="number-display">
                    <span>0{index + 1}</span>
                  </div>
                  <div className="service-box">
                    <h6>{card.title}</h6>
                    
                  </div>
                  <div className="hover-content">
                    
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                    <div className="hover-btn">
                      <Link to="#" className="partner-btn">
                      <FontAwesomeIcon icon={faArrowRight} size="lg" style={{color: "#000000",}} />
                      </Link>
                  
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <HowWeDoIt />
      <DesignTools />
      <DesignServices />

      <div className="your-business">
      <div className="overlay"></div>
        <Container>
          <Row className="d-flex align-items-center justify-content-end">
            <Col lg={6} className="business-content">
              <h1 className="business-title">Design Jumpstart for Your Business</h1>
              <p className="business-desc">
                Praesent venenatis justo in ultrices tempor. Donec maximus,
                dolor a condimentum congue, tellus nisi dictum magna, uttree
                lorem ipsum viverra massa ex sit amet nulla. Duis lobortis nisl
                sed aliquam sollicitudin.
              </p>
              <button className="partner-btn">
                <Link to="">Contact Us</Link> 
              </button> 
           
              
            
              <Row>
                <Col xs={6} className="mb-2 business-size">
                <span className="me-3">
                <FontAwesomeIcon icon={faCircleCheck} size="lg"/>
                </span>
                  Business to business
                </Col>
                <Col xs={6} className="mb-2 business-size">
                <span className="me-3">
                <FontAwesomeIcon icon={faCircleCheck} size="lg"/>
                </span>
                  Non-profit business
                </Col>
                <Col xs={6} className="mb-2 business-size">
                <span className="me-3">
                <FontAwesomeIcon icon={faCircleCheck} size="lg"/>
                </span>
                
                  Business to customer
                </Col>
                <Col xs={6} className="mb-2 business-size">
                <span className="me-3">
                <FontAwesomeIcon icon={faCircleCheck} size="lg"/>
                </span>
                  eCommerce
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
   
    </section>
  );
};

export default Services;
