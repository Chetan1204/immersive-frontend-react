import React, { useState } from "react";


const testimonials = [
  {
    name: "Arijit Bhattacharyya",
    position: "Product Head - Digital",
    image: "assets/images/mobiledevelopmentservices/client-name.svg", 
    review: `When we approached Appinventiv, what we had was a Domino’s pizza app and website whose conversion rate was dwindling for quite some time. We weren’t able to identify the issue, but we needed quick help. The time and effort that the team spent behind our application, not just identified the issue but also eradicated it from scratch.`,
  },
  {
    name: "John Doe",
    position: "CTO - Example Corp",
    image: "assets/images/mobiledevelopmentservices/client-name.svg",
    review: `Working with Appinventiv was a seamless experience. They truly understood our vision and delivered beyond expectations.`,
  },
  {
    name: " Bhattacharyya",
    position: " Head - Digital",
    image: "assets/images/mobiledevelopmentservices/client-name.svg", // Replace with real image
    review: `When we approached Appinventiv, what we had was a Domino’s pizza app and website whose conversion rate was dwindling for quite some time. We weren’t able to identify the issue, but we needed quick help. The time and effort that the team spent behind our application, not just identified the issue but also eradicated it from scratch.`,
  },
  {
    name: "Arijit ",
    position: "Product  - Digital",
    image: "assets/images/mobiledevelopmentservices/client-name.svg", // Replace with real image
    review: `When we approached Appinventiv, what we had was a Domino’s pizza app and website whose conversion rate was dwindling for quite some time. We weren’t able to identify the issue, but we needed quick help. The time and effort that the team spent behind our application, not just identified the issue but also eradicated it from scratch.`,
  },
];

export default function ClientReview() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="client-review-section">
      <h2 className="title">Client Reviews: Words that Speak Volumes</h2>
      <p className="subtitle">
        Take a look at the success of our custom app development services
        through our clients’ perspective.
      </p>

      <div className="testimonial-card">
        <button className="arrow left" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="content">
          <div className="profile">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="avatar"
            />
            <div>
              <h3>{testimonials[index].name}</h3>
              <span>{testimonials[index].position}</span>
            </div>
          </div>

          <div className="review">
            <span className="quote start">“</span>
            {testimonials[index].review}
            <span className="quote end">”</span>
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
}
