import React from "react";


const brands = [
  { name: "IKEA", logo: "/assets/images/DedicatedTeam/ikea-logo.png" },
  { name: "Dominos", logo: "/assets/images/DedicatedTeam/dominose-logo.png" },
  { name: "JobGet", logo: "/assets/images/DedicatedTeam/Jobget.png" },
];

const Brand: React.FC = () => {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-content">
          <h2>
            Success Stories of Brands <br /> We are Dedicated to
          </h2>
          <p>
            Many top-notch brands have chosen us as their digital transformation
            partner.
          </p>
        </div>

        <div className="brands-logos">
          {brands.map((brand, index) => (
            <div key={index} className="brand-logo">
              <img src={brand.logo} alt={brand.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
