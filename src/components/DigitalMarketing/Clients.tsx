import React from "react";


interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "Government of Qatar", logo: "/assets/images/DigitalMarketing/Government.svg" },
  { name: "UP Projects Corporation Limited", logo: "/assets/images/DigitalMarketing/up.svg" },
  { name: "CMO and DIPR, Uttrakhand Government", logo: "/assets/images/DigitalMarketing/cmo.svg" },
  { name: "Noida Police Women Safety Ap", logo: "/assets/images/DigitalMarketing/noida.svg" },
  { name: "Grid Corporation of India", logo: "/assets/images/DigitalMarketing/grid.svg" },
  { name: "Irrigation & water resources department", logo: "/assets/images/DigitalMarketing/irrigation.svg" },
  { name: "State Water & Sanitation Mission", logo: "/assets/images/DigitalMarketing/swsm.svg" },
  { name: "Umang", logo: "/assets/images/DigitalMarketing/umang.svg" },
  { name: "Ground Water Department", logo: "/assets/images/DigitalMarketing/dipr.svg" },
  { name: "Department of Groundwater,Government of UP", logo: "/assets/images/DigitalMarketing/ground.svg" },
  { name: "Minor Irrigation Department", logo: "/assets/images/DigitalMarketing/minor.svg" },
  { name: "Ministry of Electronics and IT", logo: "/assets/images/DigitalMarketing/ministry.svg" },
  
  
];

const Clients: React.FC = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="section-title">Our Clients</h2>
        <div className="row clients-grid">
          {clients.map((client, index) => (
            <div className="col-lg-3 client-card" key={index}>
              <img src={client.logo}  />
              <p>{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
