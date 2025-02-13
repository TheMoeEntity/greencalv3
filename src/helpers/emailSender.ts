"use server";
import nodemailer from "nodemailer";

interface DonorDetails {
  firstName: string;
  lastName: string;
  email: string;
  amount: string;
  paymentMethod: string;
  isAnonymous: boolean;
}

// Create the transporter once and reuse it.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_MAIL,
    pass: process.env.NEXT_PUBLIC_PASS,
  },
});

/**
 * Sends an email to the foundation notifying of a new donation.
 */
export async function sendDonorEmail(donorDetails: DonorDetails) {
  const donorStatus = donorDetails.isAnonymous
    ? `<p style="color: #f44336; font-weight: bold;">Donor prefers to be anonymous</p>`
    : "";

  // Email template for the foundation
  const emailTemplate = `
    <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
      <h2 style="color: #009688; text-align: center;">🎉 New Donation Received!</h2>
      <p style="font-size: 16px; color: #555;">Hello,</p>
      <p style="font-size: 16px; color: #555;">We have received a new donation. Here are the details:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Donor Name:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${donorDetails.firstName} ${donorDetails.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${donorDetails.email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Amount:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${donorDetails.amount}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Payment Method:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${donorDetails.paymentMethod}</td>
        </tr>
      </table>

      ${donorStatus}

      <p style="font-size: 16px; color: #555;">Thank you for your support!</p>
      <p style="text-align: center; color: #009688; font-weight: bold;">- Greencal Foundation Team</p>
    </div>
  `;

  const mailOptions = {
    from: '"Greencal Foundation" <greencalfoundation1@gmail.com>',
    to: "greencalfoundation1@gmail.com",
    subject: "New Donation Received 🎉",
    html: emailTemplate,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Notification email sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending notification email: ", error);
    return false;
  }
}

/**
 * Sends a confirmation email to the donor.
 * @param donorDetails The details of the donor.
 * @param supportNumber Your support contact number.
 */
export async function sendDonorConfirmationEmail(
  donorDetails: DonorDetails,
  supportNumber: string
) {
  // Email template for donor confirmation
  const confirmationTemplate = `
    <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;background-color:#f9f9f9;padding:20px;border-radius:10px;border:1px solid #ddd;">
      <h2 style="color:#009688;text-align:center;">Thank You for Your Donation Submission</h2>
      <p style="font-size:16px;color:#555;">Dear ${donorDetails.firstName},</p>
      <p style="font-size:16px;color:#555;">
        Thank you for submitting your donation form to Greencal Foundation.
        If you have made a donation, please contact our support team at <strong>${supportNumber}</strong> to confirm receipt of your payment.
        Once confirmed, we will update your donation details on our website promptly.
      </p>
      <p style="font-size:16px;color:#555;">Thank you for your generous support!</p>
      <p style="text-align:center;color:#009688;font-weight:bold;">Best regards,<br/>The Greencal Foundation Team</p>
    </div>
  `;

  const mailOptions = {
    from: '"Greencal Foundation" <greencalfoundation1@gmail.com>',
    to: donorDetails.email,
    subject: "Thank You for Your Donation Submission",
    html: confirmationTemplate,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending confirmation email: ", error);
    return false;
  }
}
