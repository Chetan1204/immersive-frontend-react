import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const CaseStudies: React.FC = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 881, y: 345 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringBox, setIsHoveringBox] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      if (isHoveringBox) {
        setIsClicking(true);
        setTimeout(() => setIsClicking(false), 300);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isHoveringBox]);

  const handleMouseEnter = (index: number) => {
    setHoveredVideo(index);
    setIsHoveringBox(true);
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredVideo(null);
    setIsHoveringBox(false);
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
      videoRefs.current[index]!.currentTime = 0;
    }
  };

  const handleVideoEnd = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.currentTime = 0;
      setHoveredVideo(null);
    }
  };

 const caseStudiesData = [
    {
      category: "Food",
      description: "Caribou: Helping a reputed coffee chain go digital with a powerful app in their Kuwait chapter",
      poster: "assets/images/casestudies/food.png",
      video: "assets/images/Caribou_min_d91fcf473b.mp4"
    },
    {
      category: "Retail / Food",
      description: "LIKEA Foods: Delectably designed branded E-commerce store to launch a new sales channel",
      poster: "assets/images/casestudies/ikea_54473e2d09.webp",
      video: "assets/images/IKEA_60_9ca2a8b95b.mp4"
    },
    {
      category: "Automobile",
      description: "Turtlewax: Achieving glossy greatness for cars with a smooth redefined website",
      poster: "assets/images/casestudies/thumb_2_82757380ce.webp",
      video: ""
    },
    {
      category: "Retail",
      description: "LuLu Hypermarket: Building a one-click path for a search-intensive, high volume big brand store",
      poster: "assets/images/casestudies/LULU_Thumb_2_c17c456ffc.webp",
      video: "assets/images/LULU_c1b1b4f4ab.mp4"
    },
    {
      category: "Retail / Fashion",
      description: "Joyalukkas: An interactive-seamless website to own your unique statement jewellery",
      poster: "assets/images/casestudies/Joyalukkas_40513039ea.webp",
      video: ""
    },
    {
      category: "Media",
      description: "Radio Mango: Ears on to timeless tunes guided by a feature rich mobile app",
      poster: "assets/images/casestudies/final_radiomango_2a5bd530c1.webp",
      video: ""
    }
  ];

  return (
    <>
      {/* Custom Cursor - Only visible when hovering studies-box */}
      <div 
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, .15);',
          display: isHoveringBox ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(-50%, -50%) translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
          translate: `none`,
          rotate: `none`,
          opacity: `1`,
          visibility: `inherit`,
          backdropFilter:`blur(20px)`,
          transition: 'transform 0.1s ease, width 0.3s ease, height 0.3s ease',
          transformOrigin: 'center',
          scale: isClicking ? '0.8' : '1'
        }}
      >
        <span style={{
          color: 'white',
          fontWeight: '300',
          letterSpacing:'.04em',
          textTransform:'uppercase',
          fontSize: '14px',
          transition: 'all 0.3s ease',
          opacity: isClicking ? '0.8' : '1'
        }}>
          Click
        </span>
      </div>

      {/* Case Studies Content */}
      <section className="py-5 pt-5 case-studies ">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="mb-3">
                <h1>Case Studies</h1>
              </div>
            </Col>
          </Row>
          <Row className="d-flex align-items-center row-gap-5">
            {caseStudiesData.map((study, index) => (
              <Col
                key={index}
                lg={4}
                md={4}
                sm={12}
                className="wow animate__animated animate__fadeInUp"
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <div 
                  className="studies-box"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{ cursor: 'default', }} // Hide default cursor on box
                >
                  <div className="studies-img">
                    <video
                      ref={(el: HTMLVideoElement | null) => {
                        videoRefs.current[index] = el;
                      }}
                      loop={false}
                      muted
                      playsInline
                      className="w-100"
                      poster={study.poster}
                      onEnded={() => handleVideoEnd(index)}
                      style={{
                        display: hoveredVideo === index ? 'block' : 'none'
                      }}
                    >
                      <source src={study.video} type="video/mp4" />
                    </video>
                    <img 
                      src={study.poster} 
                      alt={study.category} 
                      className="w-100"
                      style={{
                        display: hoveredVideo === index ? 'none' : 'block'
                      }}
                    />
                  </div>
                  <div className="studies-content">
                    <h6>{study.category}</h6>
                    <p>{study.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
  <Col className="d-flex justify-content-center">
    <button className="view-all-btn">
      View all works <span style={{ marginLeft: '8px' }}>→</span>
    </button>
  </Col>
</Row>
        </Container>
      </section>
    </>
  );
};

export default CaseStudies;