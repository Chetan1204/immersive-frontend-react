import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DevelopmentExperties: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const processData = [
    {
      title: "Strategic Planning",
      content:
        "The stage involves a thorough analysis of functional and non-functional requirements of the client business, comprehensive competition research, development of user personas, and finalizing measurable goals and key performance indicators (KPIs) for the project's success.",
    },
    {
      title: "Design Phase",
      content:
        "We focus on creating an intuitive, user-friendly, and aesthetically appealing design, which aligns with both business goals and user needs.",
    },
    {
      title: "Development Stage",
      content:
        "Our development team builds the application with clean, efficient, and scalable code, ensuring the app works flawlessly across platforms and devices.",
    },
    {
      title: "Quality Assurance",
      content:
        "Rigorous testing is conducted to identify and fix bugs, ensure security, and confirm the app performs as expected in real-world scenarios.",
    },
    {
      title: "Release and Support",
      content:
        "Once deployed, we provide ongoing maintenance, monitoring, and updates to ensure the application remains competitive and fully functional.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (!containerRef.current || !leftBoxRef.current || !rightBoxRef.current) return;

    const endValue =
      rightBoxRef.current.offsetHeight - leftBoxRef.current.offsetHeight;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${endValue}`,
      pin: leftBoxRef.current,
      pinSpacing: true,
      scrub: false,
      markers: false,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        gap: "40px",
        padding: "50px",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* Left Sticky */}
      <div ref={leftBoxRef} style={{ flex: "1" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Our Agile Mobile Application Development Process
        </h2>
        <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
          As a committed custom mobile app development services provider, we are
          dedicated to utilizing the <a href="#" style={{ color: "#1E90FF" }}>Agile DevOps</a> framework.
          It empowers us to consistently deliver predictable, scalable, and
          measurable results to our clients. Our <a href="#" style={{ color: "#1E90FF" }}>DevOps services</a> experts
          guarantee to ensure a high level of consistency and reliability
          throughout the project development process.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "#1E90FF",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            color: "#fff",
            fontWeight: "500",
          }}
        >
          Connect with Experts
        </button>
      </div>

      {/* Right Scrollable */}
      <div ref={rightBoxRef} style={{ flex: "1" }}>
        {processData.map((item, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #333",
              padding: "15px 0",
            }}
          >
            <div
              onClick={() => toggleAccordion(index)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              {/* Grey box icon */}
              
              <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "#444",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  fontSize: "14px",
                  flexShrink: 0,
                  
                }}
              >
                {activeIndex === index ? "↑" : "↓"}
              </div>
            </div>
            {activeIndex === index && (
              <div style={{ marginTop: "10px", lineHeight: "1.6" }}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentExperties;
