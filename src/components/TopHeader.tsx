import React from "react";
import { Link } from "react-router-dom";

const TopHeader: React.FC = () => {
  
  return (
    <div className="top-header text-white py-2">
      <div className="container justify-content-between align-items-left text-end">
        <span><Link to="tel:+91 8889800028" className="text-white">Sales: +91 8889800028</Link> </span>

      </div>
    </div>
  );
};

export default TopHeader;
