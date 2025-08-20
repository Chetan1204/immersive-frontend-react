import React, { useEffect, useState } from "react";


const initialCounters = [
  { targetValue: 1600, currentValue: 0, label: "Tech Experts On-Board", suffix: "+" },
  { targetValue: 3000, currentValue: 0, label: "Projects Successfully Delivered", suffix: "+" },
  { targetValue: 99, currentValue: 0, label: "Happy Clients", suffix: "%" },
  { targetValue: 80, currentValue: 0, label: "Repeat Business", suffix: "%" },
];

const Counter = () => {
  const [counters, setCounters] = useState(initialCounters);

  useEffect(() => {
    const duration = 2000; // total animation duration in ms
    const interval = 20;   // update interval
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
    <section className="counter-sec">
      <div className="counter-container">
        {/* LEFT SIDE */}
        <div className="counter-left">
          <div className="counters-grid">
            {counters.map((item, index) => (
              <div className="counter-box" key={index}>
                <h2 className="counter-number">
                  {item.currentValue}
                  <span className="suffix">{item.suffix}</span>
                </h2>
                <p className="counter-label">{item.label}</p>
              </div>
            ))}
          </div>

          <button className="cta-btn">Discuss Project Requirements</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="counter-right">
          <div className="image-wrapper">
            <img src="assets/images/mobiledevelopmentservices/blockchain-cta-banner.webp" alt="Person" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
