import React, { useEffect, useState } from "react";
import "./Desktop.css";

const initialCounters = [
  { targetValue: 12, currentValue: 0, label: "Years of Experience" },
  { targetValue: 3000, currentValue: 0, label: "Successful Projects Delivered" },
  { targetValue: 1200, currentValue: 0, label: "Software Development Experts" },
  { targetValue: 25, currentValue: 0, label: "Countries Served" },
];

const Counter = () => {
  const [counters, setCounters] = useState(initialCounters);

  useEffect(() => {
    const duration = 2000; // total animation duration in ms
    const interval = 20; // update interval
    const steps = duration / interval;

    const updatedCounters = [...counters];
    updatedCounters.forEach((counter, index) => {
      let count = 0;
      const increment = counter.targetValue / steps;

      const intervalId = setInterval(() => {
        count += increment;
        if (count >= counter.targetValue) {
          count = counter.targetValue;
          clearInterval(intervalId);
        }
        updatedCounters[index].currentValue = Math.ceil(count);
        setCounters([...updatedCounters]);
      }, interval);
    });
  }, []);

  return (
    <section className="counter-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="bg_wrapper">
              <div className="stats_wrap">
                <div className="pad_gap">
                  <div className="states_panel">
                    <div className="row">
                      {counters.map((item, index) => (
                        <div className="col-lg-3" key={index}>
                          <div className="digits">
                            <span>{item.currentValue}+</span>
                            <div className="stats-head">{item.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="common__btn blk hv_blue">
                      <a href="#" className="btn_line btn-effect btn--show-modal">
                        <span>Discuss your Web Project Requirements</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
