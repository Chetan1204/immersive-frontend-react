import React, { useMemo, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Feature {
  title: string;
  description: string;
}

interface Panel {
  name: string;
  image: string;
  features: Feature[];
}

const panels: Panel[] = [
  {
    name: "Customer App Panel",
    image: "assets/images/E-commerce-Icon/customer.webp",
    features: [
      {
        title: "Quick Onboarding with Social Login",
        description: "Users can sign up and log in effortlessly using their social media profiles or email accounts."
      },
      {
        title: "Smart Product Discovery & Filtering",
        description: "Advanced filtering options let users search by price, category, brand, rating, availability, and promotional offers."
      },
      {
        title: "Real-Time Order & Shipment Tracking",
        description: "Integrated with top-tier logistics providers (FedEx, UPS, USPS, etc.), users can track their orders live with milestone-based updates."
      },
      {
        title: "Multiple Payment Options",
        description: "Supports all major debit/credit cards, UPI, net banking, and wallets, ensuring fast, secure, and flexible checkout experiences."
      },
       {
        title: "Multiple Payment Options",
        description: "Supports all major debit/credit cards, UPI, net banking, and wallets, ensuring fast, secure, and flexible checkout experiences."
      },
      {
        title: "Multiple Payment Options",
        description: "Supports all major debit/credit cards, UPI, net banking, and wallets, ensuring fast, secure, and flexible checkout experiences."
      }
    ]
  },
  {
    name: "Admin Panel",
    image: "assets/images/E-commerce-Icon/admin.webp",
    features: [
      {
        title: "Advanced Analytics Dashboard",
        description: "Admins get real-time insights into sales, users, orders, and revenue with interactive dashboards."
      },
      {
        title: "Role-Based Access Control",
        description: "Manage different roles like managers, staff, and super admins with granular access permissions."
      },
      {
        title: "Inventory Management",
        description: "Track stock levels, set alerts for low inventory, and automate purchase orders."
      },
      {
        title: "Marketing & Promotions",
        description: "Create and manage coupons, discounts, and campaigns to boost customer engagement."
      }
    ]
  },
  {
    name: "Vendor Panel",
    image: "assets/images/E-commerce-Icon/vendor.webp",
    features: [
      {
        title: "Vendor Registration & Onboarding",
        description: "Vendors can quickly register, upload documents, and get verified to start selling."
      },
      {
        title: "Product Management",
        description: "Easily add, update, and categorize products with bulk upload features."
      },
      {
        title: "Order Management",
        description: "Vendors get complete visibility into their orders, from new to delivered."
      },
      {
        title: "Earnings & Payouts",
        description: "Track sales, commissions, and payouts with transparent reporting."
      }
    ]
  }
];

const GROUP_SIZE = 4;

const FeaturePanels: React.FC = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const active = panels[activePanel];

  const totalSlides = useMemo(
    () => Math.max(1, Math.ceil(active.features.length / GROUP_SIZE)),
    [active.features.length]
  );

  const start = activeSlide * GROUP_SIZE;
  const visible = active.features.slice(start, start + GROUP_SIZE);

  const goPrev = () => setActiveSlide(s => (s === 0 ? totalSlides - 1 : s - 1));
  const goNext = () => setActiveSlide(s => (s === totalSlides - 1 ? 0 : s + 1));
  const goto = (i: number) => setActiveSlide(i);

  return (
    <section className="feature-panels">
      <div className="container">
        <h2 className="title">We Design Feature-Rich eCommerce Application Panels</h2>
        <p className="subtitle">
          As industry leaders in eCommerce app development services, we take your product/service delivery business to the next level with a complete suite of rich and advanced features for customer, admin, and vendor panels.
        </p>

        {/* Tabs */}
        <div className="tabs">
          {panels.map((p, i) => (
            <button
              key={p.name}
              className={`tab ${i === activePanel ? "active" : ""}`}
              onClick={() => {
                setActivePanel(i);
                setActiveSlide(0);
              }}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="content">
          {/* Left: Features */}
          <div className="col-lg-6">
            <p> We specialize in eCommerce mobile application development, delivering a feature-rich
             admin panel that empowers admins to manage stores with ease, across all platforms.</p>
          <div className="features">
            {visible.map((f, i) => (
              <div className="feature" key={i}>
                <h3>
                  <span className="number">{String(start + i + 1).padStart(2, "0")}</span> {f.title}
                </h3>
                <p>{f.description}</p>
              </div>
            ))}

            {/* Controls */}

          </div>
                      <div className="controls">
              <div className="counter">{String(activeSlide + 1).padStart(2, "0")}</div>
              
              <div className="dots">
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`dot ${i === activeSlide ? "active" : ""}`}
                    onClick={() => goto(i)}
                  />
                ))}
              </div>
              
              <div className="arrows">
                <button className="nav" onClick={goPrev} aria-label="Previous">
                  <FaArrowLeft />
                </button>
                <button className="nav" onClick={goNext} aria-label="Next">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="col-lg-6">
          <div className="image">
            <img src={active.image} alt={active.name} />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePanels;