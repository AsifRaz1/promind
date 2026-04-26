'use server';

// Contact Form Server Action

/**
 * Handle contact form submission
 * @param {Object} prevState - Previous form state
 * @param {FormData} formData - Form data from submission
 * @returns {Object} Result with success/error status
 */
export async function submitContactForm(prevState, formData) {
  try {
    // Extract and sanitize form data
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim().toLowerCase();
    const phone = formData.get('phone')?.trim();
    const company = formData.get('company')?.trim();
    const subject = formData.get('subject')?.trim();
    const message = formData.get('message')?.trim();

    // Validation
    const errors = {};

    if (!name || name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!subject || subject.length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }

    if (!message || message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    // If validation errors, return them
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
        message: 'Please fix the errors below',
      };
    }

    // TODO: In production, implement actual email sending logic
    // For now, just simulate success
    // Options:
    // 1. Send email via nodemailer/sendgrid/resend
    // 2. Save to database
    // 3. Send to CRM/notification service

    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}
