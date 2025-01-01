import { eventCard, FAQType } from "@/types";
import essay from "../../public/images/essay.jpg";
import medical from "../../public/images/sickle-cell.jpg";

export const faqs: FAQType[] = [
  {
    text: "How much time do I need to Volunteer?",
    isActive: false,
    reply: `To register your community on smart X kindly <a href='/signup' class='highlight'>create account</a> or <a class='highlight' href='mailto:contactsales@pepnops.com'>contact sales</a> (for customization) and we will reach out to you with all the necessary information.`,
  },
  {
    text: "How Will My Donations Be Used?",
    isActive: false,
    reply: `We offer 2 subscription models, General and premium. For the general subscription kindly register here. While for premium subscription kindly <a href='mailto:contactsales@pepnops.com' class='highlight'>contact sales</a> or <a href='#demo' class='highlight'>request demo.</a>`,
  },
  {
    text: "How Can I Apply for a Job with You?",
    isActive: false,
    reply: `Kindly fill out the <a href='#service' class='highlight'>contact form</a> to request for a subscription upgrade.`,
  },
  {
    text: "What Can I Participate",
    isActive: false,
    reply: `If you experience any technical difficulties with any of our products, please reach out to our support team via the support form in app or via <a href='mailto:support@pepnops.com' class='highlight'>support@pepnops.com.</a> We'll be happy to assist you.`,
  },
  {
    text: "We Help Non Profits Become More Effective",
    isActive: false,
    reply:
      "All our products are absolutely customizable to suite your personal and business needs. We offer various customization packages to enable you add more personalized features in line with your specific needs.",
  },
];
export const content: eventCard[] = [
  {
    img: essay,
    title:
      "Greencal Foundation Uplifts Students Through Annual Essay Competition",
    content:
      "For graduating secondary school students preparing for their SSCE or NECO exams, Greencal Foundation's essay competition provides a unique opportunity...",
    comingSoon: false,
    slug: "annual-essay-competition",
  },
  {
    img: medical,
    title:
      "Greencal Foundation in collaboration with MWAN Ebonyi State celebrates World Sickle Cell Day with donation at AEFUTHA",
    content:
      "As part of the activities to mark World Sickle Cell Day 2024, the Alex Ekwueme Federal University Teaching Hospital Abakaliki (AEFUTHA) celebrated...",
    comingSoon: false,
    slug: "sickle-cell-day",
  },
];
