import React, { useRef, useState } from "react";


type Item = {
  title: string;
  content: string;
};

const ITEMS: Item[] = [
  {
    title: "Digital Goods & Electronic eCommerce",
    content:
      "Platforms designed for seamless distribution of digital products—eBooks, music, software—with DRM, instant delivery, licensing, and secure payments."
  },
  {
    title: "Mobile Commerce (mCommerce)",
    content:
      "Mobile-first storefronts and apps focused on speed and conversion, supporting Apple/Google Pay, push notifications, and deep linking."
  },
  {
    title: "B2B eCommerce Solutions",
    content:
      "Bulk ordering, negotiated pricing, purchase approvals, custom catalogs, and ERP/PIM integrations for complex buyer workflows."
  },
  {
    title: "B2C Online Stores",
    content:
      "Direct-to-consumer storefronts with rich merchandising, search, recommendations, and scalable checkout."
  },
  {
    title: "Omnichannel Retail",
    content:
      "Unified inventory, order routing, and in-store/online experiences (BOPIS, BORIS, endless aisle)."
  },
  {
    title: "Subscription Commerce",
    content:
      "Memberships, trials, recurring billing, proration, skip/pause, and churn prevention tooling."
  },
  {
    title: "Headless Commerce Solutions",
    content:
      "API-first architectures that decouple frontend and backend for total experience freedom across web, mobile, and kiosks."
  }
];

const Chevron: React.FC<{ rotated?: boolean }> = ({ rotated }) => (
  <svg
    className={`chev ${rotated ? "rotated" : ""}`}
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
  >
    <path d="M8.12 9.29L12 13.17l3.88-3.88a1 1 0 111.41 1.41l-4.59 4.59a1 1 0 01-1.41 0L6.71 10.7a1 1 0 011.41-1.41z" />
  </svg>
);

const AccordianSection: React.FC = () => {
  // exactly one open at a time
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const onToggle = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="ecom-platforms">
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
 <div className="ecom-content">
          <h2>
            eCommerce Platforms Engineered for <br /> Diverse Needs and Sectors
          </h2>
          <p className="lede">
            We build eCommerce applications with precision, purpose, and flexibility to meet the
            evolving demands of digital commerce across industries. Each platform is tailored to
            match specific business models, customer behaviors, and operational goals, offering a
            seamless blend of design, performance, and scalability.
          </p>
        </div>
            </div>
<div className="col-lg-6">
  <div className="left">
         

          <div className="accordion" role="tablist" aria-multiselectable="false">
            {ITEMS.map((item, i) => (
              <AccordionRow
                key={item.title}
                index={i}
                item={item}
                isActive={activeIndex === i}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
</div>
      <div className="col-lg-6">
   <div className="right">
          <img
            // swap this with your asset if needed
            src="assets/images/E-commerce-Icon/digital-good-banner.webp"
            alt="Mobile commerce screen preview"
            loading="lazy"
          />
        </div>
      </div>
            </div>
       


     
      </div>
   
    </section>
  );
};

const AccordionRow: React.FC<{
  index: number;
  item: Item;
  isActive: boolean;
  onToggle: (index: number) => void;
}> = ({ index, item, isActive, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const height = isActive && contentRef.current
    ? `${contentRef.current.scrollHeight}px`
    : "0px";

  const id = `acc-panel-${index}`;
  const btnId = `acc-btn-${index}`;

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(index);
    }
  };

  return (
    <div className={`acc-item ${isActive ? "active" : ""}`}>
      <button
        id={btnId}
        className="acc-head"
        role="tab"
        aria-controls={id}
        aria-expanded={isActive}
        onClick={() => onToggle(index)}
        onKeyDown={handleKey}
      >
        <span className="title">{item.title}</span>
        <Chevron rotated={isActive} />
      </button>

      <div
        id={id}
        role="region"
        aria-labelledby={btnId}
        className="acc-body"
        ref={contentRef}
        style={{ maxHeight: height }}
      >
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default AccordianSection;
