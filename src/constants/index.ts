import { eventCard, FAQType } from "@/types";
import essay from "../../public/images/essay.jpg";
import medical from "../../public/images/sickle-cell.jpg";

export const faqs: FAQType[] = [
  {
    text: "How can I support the Greencal Foundation?",
    isActive: false,
    reply: `You can support us by making a donation, volunteering, or spreading the word about our mission. To learn more or get involved, kindly <a
              rel="noopener noreferrer"
              href="https://wa.me/+2348160988961?text=Hello,%20I%20am%20interested%20in%20supporting%20the%20GreenCal%20Foundation.%20Could%20you%20please%20provide%20details%20on%20how%20I%20can%20help?"
              target="_blank"
               class="highlight underline"
            >
              chat with us on WhatsApp</a>.`,
  },
  {
    text: "Where do donations go?",
    isActive: false,
    reply: `Donations are used to fund our education initiatives, medical outreaches, and other community programs. For a detailed breakdown or to ask questions about our projects, please <a
              rel="noopener noreferrer"
              href="https://wa.me/+2348160988961?text=Hello,%20I%20would%20like%20to%20know%20how%20my%20donation%20to%20the%20GreenCal%20Foundation%20is%20used.%20Could%20you%20provide%20more%20details?"
              target="_blank"
               class="highlight underline"
            >
              chat with us on WhatsApp</a>.`,
  },
  {
    text: "Can I volunteer for your programs?",
    isActive: false,
    reply: `Yes, we welcome volunteers! To find out how you can get involved, kindly <a
              rel="noopener noreferrer"
              href="https://wa.me/+2348160988961?text=Hello,%20I%20am%20interested%20in%20volunteering%20for%20GreenCal%20Foundation.%20Can%20you%20share%20more%20details%20about%20current%20opportunities?"
              target="_blank"
              class="highlight underline"
            >
              chat with us on WhatsApp</a>.`,
  },
  {
    text: "How are beneficiaries selected for your programs?",
    isActive: false,
    reply: `Beneficiaries are chosen based on need and specific criteria for each program. To learn more about our selection process, please <a
              rel="noopener noreferrer"
              href="https://wa.me/+2348160988961?text=Hello,%20I%20would%20like%20to%20know%20about%20the%20selection%20criteria%20for%20GreenCal%20Foundation%20programs.%20Could%20you%20provide%20more%20details?"
              target="_blank"
              class="highlight underline"
            >
              chat with us on WhatsApp</a>.`,
  },
  {
    text: "Do you collaborate with other organizations?",
    isActive: false,
    reply: `Yes, we are open to collaborations! If your organization is interested in partnering with us, please <a
              rel="noopener noreferrer"
              href="https://wa.me/+2348160988961?text=Hello,%20I%20represent%20an%20organization%20interested%20in%20collaborating%20with%20GreenCal%20Foundation.%20Could%20you%20share%20more%20details?"
              target="_blank"
              class="highlight underline"
            >
              chat with us on WhatsApp</a>.`,
  },
  {
    text: "How can I stay updated on your activities?",
    isActive: false,
    reply: `You can stay updated by following us on social media. For more details, kindly <a
              rel="noopener noreferrer"
              href="https://wa.me/+2348160988961?text=Hello,%20I%20would%20like%20to%20know%20how%20to%20stay%20updated%20on%20GreenCal%20Foundation%27s%20activities.%20Could%20you%20provide%20more%20details?"
              target="_blank"
              class="highlight underline"
            >
              chat with us on WhatsApp</a>.`,
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
export const monthCodes = [
  {
    code: "Jan",
    name: "January",
    number: 1,
  },
  {
    code: "Feb",
    name: "February",
    number: 2,
  },
  {
    code: "Mar",
    name: "March",
    number: 3,
  },
  {
    code: "Apr",
    name: "April",
    number: 4,
  },
  {
    code: "May",
    name: "May",
    number: 5,
  },
  {
    code: "Jun",
    name: "June",
    number: 6,
  },
  {
    code: "Jul",
    name: "July",
    number: 7,
  },
  {
    code: "Aug",
    name: "August",
    number: 8,
  },
  {
    code: "Sep",
    name: "September",
    number: 9,
  },
  {
    code: "Oct",
    name: "October",
    number: 10,
  },
  {
    code: "Nov",
    name: "November",
    number: 11,
  },
  {
    code: "Dec",
    name: "December",
    number: 12,
  },
];
