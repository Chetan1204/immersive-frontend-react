import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

const LikeHere: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const teamImages = [
    "assets/images/Mask_Group_141180_6490fe65bd.webp",
    "assets/images/003_94adb5ab22.webp",
    "assets/images/010_f1cb8662d5.webp",
    "assets/images/007_76671de57a.webp",
    "assets/images/002_861b5f3961.webp",
    "assets/images/004_e009b0d8d7.webp",
    "assets/images/008_583f3b77f6.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === teamImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [teamImages.length]);

  return (
    <section className="careerHome_section py-5">
      <div className="container">
        <div className="row">
          <Col lg={7}>
            <div className="careerHome_content_wrapper">
              <div className="d-none d-sm-block">
                <h3 className="careerHome_title">
                  You Will Like It <br /> Here!
                </h3>
              </div>
              <p className="careerHome_description">
                At WAC, we are all about creating a habitat that lets you grow stronger roots and larger branches. Together let's make a fruitful journey!
              </p>
              <a className="arw-btn btn btn-primary" href="/careers">
                <span>Explore opportunities</span>
                <span className="arrow-two"></span>
              </a>
            </div>
          </Col>
          <Col lg={5}>
            <div className='text-center position-relative'>
              {teamImages.map((image, index) => (
                <img 
                  key={image}
                  src={image} 
                  alt="Team member" 
                  style={{
                    width: "80%",
                    position: 'absolute',
                    top: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    opacity: index === currentImageIndex ? 1 : 0,
                    transition: 'opacity 1s ease-in-out'
                  }}
                />
              ))}
            </div>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default LikeHere;