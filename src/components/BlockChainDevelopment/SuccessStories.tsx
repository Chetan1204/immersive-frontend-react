import React, { useState } from 'react';


interface Story {
  id: string;
  title: string;
  description: string;
  results: { label: string;  }[];
  image: string;
}

const stories: Story[] = [
  {
    id: 'NOVA',
    title: 'NOVA',
    description:
      ' Know how we, as a leading blockchain development firm,transformed the Education sector with a decentralized learningmanagement system.',
    results: [
      { label: ' The outcome included:',  },
      { label: ' Transforming the Education Sector with  decentralized LMS',  },
    ],
    image: '/assets/images/mobiledevelopmentservices/nova-banner.webp',
  },
  {
    id: 'EMPIRE',
    title: 'EMPIRE',
    description:
      ' See how we combined the power of crypto with the Hotel industry by launching a decentralized booking app.',
    results: [
      { label: ' The OutCome included:',  },
      { label: '  Transforming the Education Sector with  decentralized LMS',  },
    ],
    image: '/assets/images/mobiledevelopmentservices/empire-banner.webp',
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
                {/* <strong>{result.value}</strong> */}
                <span>{result.label}</span>
              </div>
            ))}
          </div>

          <button className="read-btn">Read case study</button>
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
