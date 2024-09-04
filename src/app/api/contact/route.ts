// require("dotenv").config();
import { Helpers } from "@/helpers";
import { createHTMLToSend } from "@/helpers/mail";
import { replacements } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest, res: NextResponse) {
  const { fullName, email, subject, message } = await req.json();

  const nodemailer = require("nodemailer");
  const greeting = Helpers.setGreeting();
  const sent = new Date().toLocaleString();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    secure: true,
  });
  const emailPath = path.resolve(
    "src/app/api/contact/Email-template",
    "mail.html"
  );
  const replacements: replacements = {
    fullName,
    message,
    subject,
    email,
    greeting,
    sent,
  };
  let htmlToSend = createHTMLToSend(emailPath, replacements);
  let mailData = {
    from: "Greencal foundation",
    to: "mosesnwigberi@gmail.com",
    subject: `New message from ${fullName} in your Greencal foundation website contact form`,
    html: htmlToSend,
    text: message + "| Sent from: " + email,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log("This is the error: " + err);
        reject("This is the error: " + err);
      } else {
        resolve(info);
        return NextResponse.json({ message: err }, { status: 200 });
      }
    });
  });
  return NextResponse.json({ error: "All Done" }, { status: 200 });
}
