import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const TransformingBusinesses = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const words = gsap.utils.toArray(".letter") as HTMLElement[];
  const scrollDistance = words.length * 25; // Adjust this as needed

  // Initial state
  gsap.set(words, { opacity: 1 });

  // Single timeline with pinning
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top", // starts when top hits top of viewport
      end: `+=${scrollDistance}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      pinSpacing: true,
      // markers: true // helpful for debugging
    }
  });

  // Animation sequence
  timeline.to(words, {
    opacity: 1,
    color: "#fff",
    stagger: 0.3,
    ease: "none"
  });
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  const sentence =
    "We believe in a world where technology fosters your everyday experiences. And our mission is to make it happen!";

  return (
    <div className="transforming-businesses-section" ref={sectionRef}>
      <div className="transforming-businesses">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="section-title">
                {sentence.split(" ").map((word, i) => (
                  <span key={i} className="word">
                    {word.split("").map((letter, j) => (
                      <span key={j} className="letter">{letter}</span>
                    ))}
                    &nbsp;
                  </span>
                ))}
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TransformingBusinesses;
