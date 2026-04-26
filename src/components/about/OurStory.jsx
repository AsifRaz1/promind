// Our Story Component

import { OUR_STORY } from '@/constants/about.constant';

export default function OurStory() {
  return (
    <section className="about-section our-story-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-tagline">{OUR_STORY.tagline}</span>
          <h2 className="about-title">{OUR_STORY.title}</h2>
        </div>
        
        <div className="story-content">
          {OUR_STORY.content.map((paragraph, index) => (
            <p key={index} className="story-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
