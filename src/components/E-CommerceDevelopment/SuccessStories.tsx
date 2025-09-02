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
    id: '6th Street',
    title: '6th Street',
    description:
      ' We designed and developed one of the UAE’s top fashion retail eCommerce apps, delivering a seamless and elevated shopping experience for style-conscious users.',
    results: [
      { label: 'Downloads on iOS', value: '3M+' },
      { label: 'Downloads on Android', value: '1M+' },
    ],
    image: '/assets/images/E-commerce-Icon/6th-street-banner.webp',
  },

    {
    id: 'Edamama',
    title: 'Edamama',
    description:
      ' We created an eCommerce app for mothers with personalized product recommendations based on their child’s age and gender.',
    results: [
      { label: 'Funding Raised', value: '$5 M' },
      { label: 'Expecting and New Mothers Served', value: '100,000' },
    ],
    image: '/assets/images/E-commerce-Icon/edamama-banner.webp',
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

const SuccessStories: React.FC = () => {
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
    <section className="success">
      <h2> Built for the Best: Our eCommerce Success Stories</h2>
      <p className="description">
         From global retailers to fast-growing startups, leading brands have trusted us to design,
 develop, and scale their eCommerce platforms. We build eCommerce solutions that drive real
 results, whether it's millions of app downloads, streamlined operations, or boosted conversions.
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

export default SuccessStories;
