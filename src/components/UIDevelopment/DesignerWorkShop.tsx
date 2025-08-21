import React from "react";


const DesignerWorkShop: React.FC = () => {
  return (
    <section className="design-workshop">
      <div className="container">
        <div className="left">
          <h2>
            Think broad & act deep with our <br /> design sprint workshops
          </h2>
          <button className="cta-btn">
            Know more about our product design workshop
          </button>
        </div>
        <div className="right">
          <p>
            We strategize the user experience and along our way, we deal with
            many complex issues that need to be addressed.
          </p>
          <p>
            With design interventions addressing key challenges of our clients,
            we have developed a way of working that is strategic, creative &
            technical at the same time. Our design workshops encourage a
            solution-based approach to solving problems. It cuts the endless
            discussions, controls the big egos in the room and gives space to
            shy people to express their ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignerWorkShop;
