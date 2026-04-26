// Main Content Component - Combines all content sections

import OverviewSection from './OverviewSection';
import WhyChooseUs from './WhyChooseUs';
import IndustryExpertise from './IndustryExpertise';
import ContentCTA from './ContentCTA';
import './mainContent.css';

export default function MainContent() {
  return (
    <div className="main-content">
      <OverviewSection />
      <WhyChooseUs />
      <IndustryExpertise />
      <ContentCTA />
    </div>
  );
}
