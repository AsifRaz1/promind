// Contact Page Constants

import { BRAND, CONTACT } from './global.constant';

// Contact Hero
export const CONTACT_HERO = {
  title: 'Get in Touch',
  subtitle: `Have a question or ready to start your journey with ${BRAND.NAME}?`,
  description: 'We\'d love to hear from you. Reach out and let\'s discuss how we can help transform your business.',
};

// Contact Info
export const CONTACT_INFO = {
  tagline: 'Contact Information',
  title: 'Multiple Ways to Reach Us',
  methods: [
    {
      id: 1,
      icon: 'email',
      label: 'Email Us',
      value: CONTACT.EMAIL,
      href: `mailto:${CONTACT.EMAIL}`,
    },
    {
      id: 2,
      icon: 'phone',
      label: 'Call Us',
      value: CONTACT.PHONE,
      href: `tel:${CONTACT.PHONE}`,
    },
    {
      id: 3,
      icon: 'location',
      label: 'Visit Us',
      value: CONTACT.ADDRESS,
      href: null,
    },
  ],
};

// Contact Form
export const CONTACT_FORM = {
  tagline: 'Send us a Message',
  title: 'We\'re Here to Help',
  description: 'Fill out the form below and we\'ll get back to you within 24 hours.',
  fields: {
    name: {
      label: 'Full Name',
      placeholder: 'John Doe',
      required: true,
      type: 'text',
    },
    email: {
      label: 'Email Address',
      placeholder: 'john@example.com',
      required: true,
      type: 'email',
    },
    phone: {
      label: 'Phone Number',
      placeholder: '+1 (555) 123-4567',
      required: false,
      type: 'tel',
    },
    company: {
      label: 'Company Name',
      placeholder: 'Your Company',
      required: false,
      type: 'text',
    },
    subject: {
      label: 'Subject',
      placeholder: 'How can we help you?',
      required: true,
      type: 'text',
    },
    message: {
      label: 'Message',
      placeholder: 'Tell us more about your needs...',
      required: true,
      type: 'textarea',
      rows: 6,
    },
  },
  submitButton: {
    text: 'Send Message',
    loadingText: 'Sending...',
  },
};

// Why Contact Us
export const WHY_CONTACT = {
  tagline: 'Why Reach Out',
  title: 'What to Expect',
  benefits: [
    {
      id: 1,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours.',
    },
    {
      id: 2,
      title: 'Free Consultation',
      description: 'Get expert advice with no obligation.',
    },
    {
      id: 3,
      title: 'Tailored Solutions',
      description: 'Custom strategies designed for your needs.',
    },
    {
      id: 4,
      title: 'Ongoing Support',
      description: 'We\'re with you every step of the way.',
    },
  ],
};
