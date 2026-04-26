// About Page

import { AboutHero, OurStory, MissionVision, OurValues } from '@/components/about';
import { buildSeo } from '@/utils/seo';
import { BRAND } from '@/constants/global.constant';
import '@/components/about/about.css';

// SEO Metadata
export async function generateMetadata() {
  return buildSeo({
    title: `About Us - ${BRAND.NAME}`,
    description: `Learn about ${BRAND.NAME}, our mission, vision, and the values that drive us to help businesses achieve excellence.`,
    canonical: '/about',
    keywords: 'about us, mission, vision, values, consultancy, business consulting',
  });
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurValues />
    </main>
  );
}
