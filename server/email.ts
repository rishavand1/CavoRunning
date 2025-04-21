import * as SibApiV3Sdk from 'sib-api-v3-typescript';

// Configure Brevo API client
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY || '');

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
  phone?: string;
  company?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    const { name, email, message, subject = 'New Contact Form Submission', phone = 'Not provided', company = 'Not provided' } = data;
    
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.to = [{ email: 'teamcavo07@gmail.com', name: 'CAVO Team' }];
    sendSmtpEmail.replyTo = { email, name };
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </body>
      </html>
    `;
    
    // Send an automated response to the submitter
    const autoResponseEmail = new SibApiV3Sdk.SendSmtpEmail();
    autoResponseEmail.to = [{ email, name }];
    autoResponseEmail.sender = { email: 'teamcavo07@gmail.com', name: 'CAVO Technologies' };
    autoResponseEmail.subject = 'Thank you for contacting CAVO Technologies';
    autoResponseEmail.htmlContent = `
      <html>
        <body>
          <h2>Thank you for contacting CAVO Technologies</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <p style="white-space: pre-line;">${message}</p>
          <p>Best regards,</p>
          <p>The CAVO Technologies Team</p>
        </body>
      </html>
    `;
    
    // Send both emails
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    await apiInstance.sendTransacEmail(autoResponseEmail);
    
    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}