const axios = require("axios");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    return {
      statusCode: 400,
      body: "Email is required",
    };
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
      <h2>Thank you for subscribing!</h2>
      <p>Hi,</p>
      <p>Thank you for subscribing to our mailing list. We're excited to have you on board!</p>
      <p>Best Regards,<br>The Piggie Team</p>
    </div>
  `;

  try {
    // Send confirmation email
    await axios.post(
      "https://api.resend.com/emails",
      {
        from: "Piggie Team <noreply@piggie.app>",
        to: [email],
        subject: "Subscription Confirmation",
        html: htmlContent, // Use html instead of text for HTML emails
      },
      {
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      statusCode: 200,
      body: "Subscription successful",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Failed to process subscription: ${error.message}`,
    };
  }
};
