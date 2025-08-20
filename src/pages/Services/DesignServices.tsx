import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

type ToolSection = {
  id: number;
  title: string;
  points: string[];
};

const testimonials: ToolSection[] = [
    {
      id: 1,
      title: "Fintech",
      points: [
        "Digital Payment Systems",
        "Custom Digital Banking Solutions",
        "Wealth/Finance Management Solutions",
        "Mobile Payment App Development",
        "Insurance App Development",
      ],
    },
    {
      id: 2,
      title: "Real Estate",
      points: [
        "MLS Solutions for Real Estate",
        "Virtual Property Tours",
        "Property Valuation Tools",
        "Real Estate Investment Platforms",
        "Property Management Solutions",
      ],
    },
    {
      id: 3,
      title: "Restaurant",
      points: [
        "Food Delivery App Development",
        "Cloud Kitchen Delivery Solutions",
        "Grocery Delivery Solutions",
        "Direct Delivery Solutions",
        "Restaurant POS Software Development",
      ],
    },
    {
      id: 4,
      title: "eCommerce",
      points: [
        "Custom eCommerce Development",
        "Shipping Integration",
        "Grocery & Essentials Platforms",
        "End-to-End Order Management",
        "AR-Based Shopping Solutions",
      ],
    },
    {
        id: 5,
        title: "Healthcare",
        points: [
            "Food Delivery App Development",
            "Cloud Kitchen Delivery Solutions",
            "Grocery Delivery Solutions",
            "Direct Delivery Solutions",
            "Restaurant POS Software Development",
        ],
      },
  ];

const DesignServices: React.FC = () => {
  return (
    <div
      className="py-5 design-services accordion-item wow animate__animated animate__fadeInUp"
      data-wow-delay="0.5s"
    >
      <Container>
        <Row>
          <Col lg={8} md={8} sm={12}>
            <div className="mb-5">
              <h1>Industries We Serve With Our UI UX Design Services</h1>
              <p>
                As a premier UI UX design company, we have experience working
                with a diverse range of industries, providing cutting-edge
                digital product design solutions tailored to meet the unique
                needs and objectives of businesses like yours.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Row>
        {/* <Container> */}
          <div className="testimonial-slider">
            <Swiper
              modules={[Navigation]}
              navigation
              loop={true}
              autoplay={true}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3.3 },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card p-4">
                    <p className="quote">{testimonial.title}</p>
                    {testimonial.points.map((points, i) => (
                      <ul className="list-unstyled">
                        <li key={i} className="d-flex align-items-start mb-2">
                          <img
                            src="assets/images/icon/check-circle.svg"
                            alt=""
                            className="me-3"
                          />
                          {points}
                        </li>
                      </ul>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        {/* </Container> */}
      </Row>
    </div>
  );
};

export default DesignServices;
