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

export async function sendDonorEmail(donorDetails: DonorDetails) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
  });
  const donorStatus = donorDetails.isAnonymous
    ? `Donor prefers to be anonymous`
    : "";
  // Email content
  const mailOptions = {
    from: '"Greencal Foundation" <greencalfoundation@gmail.com>',
    to: "greencalfoundation@gmail.com",
    subject: "New Donation Received",
    text: `
      New donation received!
      
      Donor Name: ${donorDetails.firstName} ${donorDetails.lastName}
      Donor Email: ${donorDetails.email}
      Donation Amount: ${donorDetails.amount}
      Payment Method: ${donorDetails.paymentMethod}
      ${donorStatus}
    `,
    html: `
      <h1>New donation received!</h1>
      <p><strong>Donor Name:</strong> ${donorDetails.firstName} ${donorDetails.lastName}</p>
      <p><strong>Donor Email:</strong> ${donorDetails.email}</p>
      <p><strong>Donation Amount:</strong> ${donorDetails.amount}</p>
      <p><strong>Payment Method:</strong> ${donorDetails.paymentMethod}</p>
      <p>${donorStatus}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
    return false;
  }
}
