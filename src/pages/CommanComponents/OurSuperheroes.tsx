import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const testimonials = [
    {
      id: 1,
      // logo: "assets/images/stage-logo.png",
      // text: "I've worked with Immersive Infotech for over a year and I can't praise them enough.",
      description:
        "The best company for Freshers to learn and grow in a short period. Flexible working time, good benefits, kind people and great team members. Very supportive mentors, I am learning a lot while working here. Great company to work with and a really great environment.",
      author: "Vinita Chouhan",
      // position: "Co-Founder, Stage",
      image: "assets/images/client.png",
    },
    {
        id: 2,
        // logo: "assets/images/stage-logo.png",
        // text: "I've worked with Immersive Infotech for over a year and I can't praise them enough.",
        description:
          "The journey so far has been an enriching experience, giving me an opportunity to explore, learn and excel in various horizons of work. Immersive Infotech is indeed going to be a career-building milestone for me. Heartfelt gratitude for all the support!",
        author: "Mahak Rai",
        // position: "Co-Founder, Stage",
        image: "assets/images/client.png",
      },
      {
        id: 3,
        // logo: "assets/images/stage-logo.png",
        // text: "I've worked with Immersive Infotech for over a year and I can't praise them enough.",
        description:
          "I love the work culture and helping nature of all the staff members by which I learned many things very fast and because of this achieving goals become much easier than before. Its proud being a part of IMMERSIVE INFOTECH... Thanks....",
        author: "Darshay Agrawal",
        // position: "Co-Founder, Stage",
        image: "assets/images/client.png",
      },
      {
        id: 4,
        // logo: "assets/images/stage-logo.png",
        // text: "I've worked with Immersive Infotech for over a year and I can't praise them enough.",
        description:
          "Immersive Infotech is the best Digital Marketing Company in Indore. I can see real changes in my brand’s digital ranking for the last three months. They have a good team.",
        author: "Pooja Pal",
        // position: "Co-Founder, Stage",
        image: "assets/images/client.png",
      },
      {
        id: 5,
        // logo: "assets/images/stage-logo.png",
        // text: "I've worked with Immersive Infotech for over a year and I can't praise them enough.",
        description:
          "Awesome company I and Immersive both started the career journey together before 8 years and now we are still growing and work together. Good Company. Great place to work.",
        author: "Basant Yadav",
        // position: "Co-Founder, Stage",
        image: "assets/images/client.png",
      },
    // Add more testimonials here
  ];

const OurSuperheroes: React.FC = () => {
  return (
    <div className="py-5 pt-0 our-superheroes accordion-item wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
      <Container>
        <Row>
          <Col lg={10} md={10} sm={12}>
            <div className="mb-5">
              <h1>
              Our Clients Are Our Superheroes. We Prioritize Delivering Excellent Products, Thorough Training, And Optimal Execution
              </h1>
            </div>
          </Col>
        </Row>
        </Container>
     <Row>
     <Container>
     <div className="testimonial-slider">
        
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        autoplay={true}
        spaceBetween={60}
        slidesPerView={3}
        
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3},
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card p-4">
              {/* <img src={testimonial.logo} alt="Stage Logo" className="logo" /> */}
              {/* <p className="quote">{testimonial.text}</p> */}
              <p className="description">{testimonial.description}</p>
              <div className="author d-flex align-items-center">
                <img src={testimonial.image} alt={testimonial.author} className="author-img" />
                <div className="author-info">
                  <h5>{testimonial.author}</h5>
                  <ul className="star list-inline mb-0">
                    <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#f3c436", fontSize: "14px"}} />
                    <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#f3c436", fontSize: "14px"}} />
                    <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#f3c436", fontSize: "14px"}} />
                    <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#f3c436", fontSize: "14px"}} />
                    <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#f3c436", fontSize: "14px"}} />
                  </ul>
                  {/* <p>{testimonial.position}</p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </Container>
     </Row>
    </div>
  );
};

export default OurSuperheroes;
