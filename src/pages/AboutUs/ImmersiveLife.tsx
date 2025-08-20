import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const lifes = [
  {
    id: 1,
    image: "assets/images/imm22.png",
    title: "All peace and no stress",
    description:
      "We aim to create a perfect work-life balance by allocating work smartly so that ideas float smoothly, work runs harmoniously and stress stays away from employees.",
  },
  {
    id: 2,
    image: "assets/images/imm223.png",
    title: "Learning and exploring for all",
    description:
      "Frequently and often, we arrange activities that help our employees explore newer ways of working and functioning better.",
  },
  {
    id: 3,
    image: "assets/images/imm223.png",
    title: "All peace and no stress",
    description:
      "We aim to create a perfect work-life balance by allocating work smartly so that ideas float smoothly, work runs harmoniously and stress stays away from employees.",
  },
];

const imageslides = [
  {
    id: 1,
    bigimage: "assets/images/imgslide1.png",
    smallimage1: "assets/images/smallimgslide1.png",
    smallimage2: "assets/images/smallimgslide1.png",
  },
  {
    id: 2,
    bigimage: "assets/images/imgslide1.png",
    smallimage1: "assets/images/smallimgslide1.png",
    smallimage2: "assets/images/smallimgslide1.png",
  },
  {
    id: 3,
    bigimage: "assets/images/imgslide1.png",
    smallimage1: "assets/images/smallimgslide1.png",
    smallimage2: "assets/images/smallimgslide1.png",
  },
];

const ImmersiveLife: React.FC = () => {
  return (
    <div className="py-5 pb-0 immersive-life">
      <Container>
        <Row>
          <Col lg={10} md={10} sm={12}>
            <div className="mb-5">
              <h1 className="title">Life @Immersive Infotech</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <div className="life-slider py-5 pt-0">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000, // Auto-slide every 3 seconds
              disableOnInteraction: false,
            }}
            modules={[Autoplay]} // Add Autoplay module
            spaceBetween={60}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 1.9 },
            }}
          >
            {lifes.map((life) => (
              <SwiperSlide key={life.id}>
                <div className="d-flex life-card">
                  <div>
                    <img src={life.image} alt="" className="author-img" />
                  </div>
                  <div>
                    <p className="card-title">{life.title}</p>
                    <p className="card-description pb-3">{life.description}</p>
                    <Link to="#" className="partner-btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Row>

      <Row className="justify-content-between">
        <div className="image-slide">
          <Swiper
            modules={[Autoplay, FreeMode]}
            speed={12000}
            loop={true}
            freeMode={true}
            slidesPerView={3}
            spaceBetween={0}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {imageslides.map((imageslide) => (
              <SwiperSlide key={imageslide.id}>
                <div className="d-flex img-card">
                  <div className="p-3">
                    <img src={imageslide.bigimage} alt="" className="big-img" />
                  </div>
                  <div className="d-flex flex-column py-3">
                    <img
                      src={imageslide.smallimage1}
                      alt=""
                      className="small-img mb-3"
                    />
                    <img
                      src={imageslide.smallimage2}
                      alt=""
                      className="small-img"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Row>
    </div>
  );
};

export default ImmersiveLife;
