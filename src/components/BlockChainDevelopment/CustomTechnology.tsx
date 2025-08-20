import React from "react";
import "./Desktop.css"
import {
  FaWallet,
  FaGamepad,
  FaExchangeAlt,
  FaCreditCard,
} from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { RiNftFill } from "react-icons/ri";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { GiMining } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  link?: string;
}

const services: Service[] = [
  { id: 1, title: "NFT Development", icon: <RiNftFill /> },
  { id: 2, title: "Crowdfunding Platform Development", icon: <AiOutlineFundProjectionScreen /> },
  { id: 3, title: "Token Wallets", icon: <FaWallet /> },
  { id: 4, title: "Blockchain Payment Platforms", icon: <FaCreditCard /> },
  { id: 5, title: "Financial Trading Platforms", icon: <BiNetworkChart /> },
  { id: 6, title: "NFT Marketplace Development", icon: <RiNftFill /> },
  { id: 7, title: "DAO Development", icon: <SiHiveBlockchain /> },
  { id: 8, title: "DeFi Development", icon: <BiNetworkChart /> },
  { id: 9, title: "Game Apps", icon: <FaGamepad /> },
  { id: 10, title: "Cryptocurrency Mining Software", icon: <GiMining /> },
  { id: 11, title: "Blockchain Cryptocurrency Exchange", icon: <FaExchangeAlt /> },
  { id: 12, title: "Blockchain Wallet & Exchange Software", icon: <MdOutlineAccountBalanceWallet /> },
];

const CustomTechnology: React.FC = () => {
  return (
    <section className="solutions-section">
        <div className="container">
      <h2 className="solutions-title">Custom Blockchain Technology Solutions We Deliver</h2>
      <p className="solutions-description">
        As a prominent blockchain app development company, we deliver custom blockchain solutions crafted specifically to cater to your business needs. Through an agile approach, we prioritize understanding your unique requirements that allow us to create tailored solutions that drive innovation in your business operations.
      </p>

      <div className="solutions-grid">
        {services.map((service) => (
          <div key={service.id} className="solution-card">
            <div className="solution-icon">{service.icon}</div>
            <p className="solution-title">{service.title}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default CustomTechnology;
