import React, { useState } from 'react';


interface Story {
  id: string;
  title: string;
  description: string;
  results: { label: string; value: string }[];
  image: string;
}

const stories: Story[] = [
  {
    id: 'JobGet',
    title: 'JobGet',
    description:
      ' How we created an AI-based job search application to make the employment landscape easy and accessible for blue-collarworkers.',
    results: [
      { label: 'Series B Funding Raised', value: '$52 Million' },
      { label: 'Mobile App Downloads', value: '2 M+' },
    ],
    image: '/assets/images/mobiledevelopmentservices/jobget-port-banner-1.webp',
  },
  {
    id: 'KFC',
    title: 'KFC',
    description:
      ' How we helped the world-famous fast-food brand, KFC, redefine its digital presence across 7+ countries.',
    results: [
      { label: ' Increase in Conversion Rate', value: '22%' },
      { label: ' Increase in Orders Coming Through App', value: '50 % ' },
    ],
    image: '/assets/images/mobiledevelopmentservices/kfc-port-banner-new.webp',
  },
  {
    id: 'YouCOMM',
    title: 'YouCOMM',
    description:
      ' How we created a multi-request healthcare mobile app that caters to custom patient requests and connects them with nurses via voice commands and hand gestures.',
    results: [
      { label: ' Hospital Chains Across the US Running the Custom Solution', value: '5+' },
      { label: ' Growth in Nurses’ Real-Time Response', value: '60+' },
    ],
    image: '/assets/images/mobiledevelopmentservices/youcomm-banner.webp',
  },
  {
    id: 'Addidas',
    title: 'Addidas',
    description:
      'Implemented real-time patient communication tools to improve response times in hospitals.',
    results: [
      { label: 'Avg. Response Time Improved', value: '60%' },
      { label: 'Hospital Adoption', value: '300+' },
    ],
    image: '/assets/images/mobiledevelopmentservices/adidas-port-banner.webp',
  },
  {
    id: 'IKEA',
    title: 'IKEA',
    description:
      'Developed an immersive AR app to enhance the online furniture buying experience.',
    results: [
      { label: 'User Engagement', value: '3x' },
      { label: 'App Downloads', value: '4 M+' },
    ],
    image: '/assets/images/mobiledevelopmentservices/ikea-port-banner-2.webp',
  },
];

const Stories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const setSlide = (index: number) => {
    setActiveIndex(index);
  };

  const activeStory = stories[activeIndex];

  return (
    <section className="success-stories">
      <h2>Success Stories: Achieving Unparalleled Excellence for Clients</h2>
      <p className="description">
        Here is a selection of notable projects our skilled professionals
        undertook to help startups, enterprises, and Fortune 500s across the globe
        thrive and achieve business goals in the cut-throat digital ecosystem.
      </p>

      <div className="story-card">
        <button className="nav-btn" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="story-content">
          <h3>{activeStory.title}</h3>
          <p>{activeStory.description}</p>

          <div className="results">
            {activeStory.results.map((result, idx) => (
              <div key={idx} className="result-item">
                <strong>{result.value}</strong>
                <span>{result.label}</span>
              </div>
            ))}
          </div>

          <button className="read-btn">Read success story</button>
        </div>

        <div className="story-image">
          <img src={activeStory.image} alt={activeStory.title} />
        </div>

        <button className="nav-btn" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="brand-tabs">
        {stories.map((story, index) => (
          <button
            key={story.id}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setSlide(index)}
          >
            {story.id}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Stories;
