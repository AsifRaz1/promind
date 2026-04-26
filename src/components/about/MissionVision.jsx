// Mission & Vision Component

import { MISSION_VISION } from '@/constants/about.constant';

export default function MissionVision() {
  return (
    <section className="about-section mission-vision-section">
      <div className="about-container">
        <div className="mission-vision-grid">
          {/* Mission */}
          <div className="mission-vision-card">
            <h3 className="mission-vision-title">{MISSION_VISION.mission.title}</h3>
            <p className="mission-vision-description">{MISSION_VISION.mission.description}</p>
          </div>

          {/* Vision */}
          <div className="mission-vision-card">
            <h3 className="mission-vision-title">{MISSION_VISION.vision.title}</h3>
            <p className="mission-vision-description">{MISSION_VISION.vision.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
