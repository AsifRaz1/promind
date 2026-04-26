// Contact Form Constants

// Contact Form Fields
export const CONTACT_FORM_FIELDS = {
  NAME: {
    name: 'name',
    label: 'Your name',
    placeholder: 'Your name',
    type: 'text',
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  EMAIL: {
    name: 'email',
    label: 'Your email',
    placeholder: 'Your email',
    type: 'email',
    required: true,
  },
  MESSAGE: {
    name: 'message',
    label: 'Your message',
    placeholder: 'Your message',
    type: 'textarea',
    required: true,
    minLength: 10,
    maxLength: 1000,
    rows: 6,
  },
};

// Contact Form UI Text
export const CONTACT_FORM_TEXT = {
  TITLE: 'Contact Us',
  SUBTITLE: 'Get in touch with us for any queries or feedback.',
  BUTTON_TEXT: 'Send',
  BUTTON_SENDING: 'Sending...',
  SUCCESS_MESSAGE: 'Thank you! Your message has been sent successfully.',
  ERROR_MESSAGE: 'Oops! Something went wrong. Please try again.',
};

// Floating Chat Button
export const CHAT_WIDGET = {
  BUTTON_LABEL: 'Chat with us',
  TOOLTIP: 'Contact Us',
};
