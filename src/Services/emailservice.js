import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    await emailjs.send(
      'service_abc123',        // Service ID
      'template_sktfedc',      // Template ID
      formData,
      'vRtSLxKvMxTAX2OYx'     // Public Key
    );
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
};