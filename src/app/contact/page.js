// Contact Page

// import { ContactHero, ContactInfo, ContactForm } from '@/components/contact';
import { buildSeo } from '@/utils/seo';
// import { BRAND } from '@/constants/global.constant';
// import '@/components/contact/contact.css';
import { BRAND } from '@/constants/global.constant';
// SEO Metadata
export async function generateMetadata() {
  return buildSeo({
    title: `Contact Us - ${BRAND.NAME}`,
    description: `Get in touch with ${BRAND.NAME}. We're here to help transform your business with expert consultancy services.`,
    canonical: '/contact',
    keywords: 'contact, get in touch, consultancy, business help, support',
  });
}

export default function ContactPage() {
  return (
    <main>
      {/* <ContactHero />
      <ContactInfo />
      <ContactForm /> */}
    </main>
  );
}
