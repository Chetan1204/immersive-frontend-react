import React, { useState } from "react";
import "./Desktop.css";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Agile Development Practices",
    description:
      " As a custom web development company, we guarantee to deliver risk-free and sustainable solutions through agile web-based application development practices.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Timely Project Delivery",
    description:
      " Being one of the leading web development companies, we have a track record of completing projects before time. Our team works hard to meet your deadlines and ensure your web app is ready to go live when you want it to.",
    image:
      "https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Transparent Communication",
    description:
      "We believe in maintaining open and honest communication with our clients throughout the development process. This ensures that you are always in the loop and can provide feedback at any stage.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
  },
];

const WhyChooseUs: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureItem>(features[0]);

  return (
    <div className="whychoose-wrapper">
      {/* Top Heading Section */}
      <div className="whychoose-header">
        <h2>
          Why Choose Appinventiv as <br /> Your Web App Development Company?
        </h2>
        <p>
          From initial consultation to the final product, Appinventiv's attention to detail and
          commitment to excellence is unparalleled. As a renowned web application design
          services firm, our experts combine cutting-edge technologies with creative design to
          deliver web apps that exceed expectations.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="whychoose-main">
        {/* Left Bullet Points */}
        <div className="whychoose-list">
          {features.map((item) => (
            <div
              key={item.id}
              className={`whychoose-list-item ${
                activeFeature.id === item.id ? "active" : ""
              }`}
              onClick={() => setActiveFeature(item)}
            >
              • <span>{item.title}</span>
            </div>
          ))}
        </div>

        {/* Middle Image */}
        <div className="whychoose-image">
          <img src={activeFeature.image} alt={activeFeature.title} />
        </div>

        {/* Right Description */}
        <div className="whychoose-description">
          <p>{activeFeature.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
