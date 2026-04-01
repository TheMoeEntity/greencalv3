import axios from "axios";
import { FormEvent } from "react";
import { EnqueueSnackbar } from "notistack";
import essay from "../../public/images/essay.jpg";
import medical from "../../public/images/medical.jpeg";
import {
  DonationsType,
  donationType,
  eventCard,
  IPost,
  linkType,
} from "@/types";
import { getDocuments, getDonations } from "./lib/firebase";
import { monthCodes } from "@/constants";

export class Helpers {
  static leaders = [
    {
      name: "Adum Obinna Abraham",
      position: "Founder | Web3 Strategist | Crypto Educator | Philanthropist",
      info: 
        `
He is a Web3 strategist and content creator with a strong focus on translating complex blockchain concepts into actionable insights and helping projects connect with their communities.

Beyond his online presence, He is the founder of a physical Education Hub DTCSI ACADEMY specialized in Tech, Web3 and AI with over 150 students trained and 10000 community members located in Ebonyi State. He organizes large-scale events like Technova, Southeast Nigeria’s premier tech and innovation showcase, bridging students, regulators, and global blockchain ecosystems.

He combines technical know-how, strategic thinking, and an understanding of audience behavior to deliver real value for projects, brands, and communities in the digital space.

As one of the founders of greencal his inspiration came as a result of the passing of his mom who was known to always lend assistance to anyone in need. He aims at stretching this kindness to the local community in Education and health through Greencal foundation
        `,
    },
    {
      name: "Kepha",
      position: "Co-founder",
      info: "Kepha, a dedicated medical student, brings his medical expertise and unwavering commitment to social justice to Greencal Foundation. Witnessing the struggles faced by many in Abakaliki firsthand fuels his drive to improve access to quality healthcare in underserved communities.",
    },
  ];
  static events: eventCard[] = [
    {
      img: essay,
      title:
        "Greencal Foundation Uplifts Students Through Annual Essay Competition",
      content:
        "For graduating secondary school students preparing for their SSCE or NECO exams, Greencal Foundation's essay competition provides a unique opportunity...",
      comingSoon: false,
    },
    {
      img: medical,
      title:
        "Greencal Foundation Organizes First Medical Outreach at Iboko, Izzi.",
      content: "Event coming soon. ",
      comingSoon: true,
    },
  ];
  static links: linkType[] = [
    {
      name: "Home",
      isActive: true,
      href: "",
    },
    {
      name: "About",
      isActive: false,
      href: "about",
    },
    {
      name: "Events",
      isActive: false,
      href: "events",
    },
    {
      name: "Donations",
      isActive: false,
      href: "donations",
    },
    {
      name: "Contact",
      isActive: false,
      href: "contact",
    },
  ];
  static validateEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  static setGreeting = (): string => {
    const hour = new Date().getHours();

    let timeCheck =
      hour < 12
        ? "Good Morning"
        : hour < 18
          ? "Good Afternoon"
          : "Good Evening";

    return timeCheck;
  };
  static handleSubmit = async (
    setStatus: any,
    setDone: any,
    e: FormEvent<HTMLFormElement>,
    toast: any
  ) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = {
      fullName: (target[0] as HTMLInputElement).value,
      email: (target[1] as HTMLInputElement).value,
      subject: (
        e.target[
          3 as unknown as keyof typeof e.target
        ] as unknown as HTMLSelectElement
      ).value,
      phone: (target[2] as HTMLInputElement).value,
      message: (target[4] as HTMLTextAreaElement).value,
    };
    if (data.fullName.trim() === "") {
      toast.error("Full name cannot be empty");
      return;
    } else if (data.subject === "" || data.subject === "--Choose--") {
      toast.error("Specify a subject");
      return;
    } else if (data.message.trim() === "" || data.message.length < 10) {
      toast.error("Message cannot be empty or short");
      return;
    }
    console.log(data);
    setDone(true);
    setStatus("SENDING....");
    try {
      const url = "/api/contact";
      const res = await axios.post(url, data);

      res.status === 200 && toast.error("Message successfully sent");
      setStatus("MESSAGE SENT");
      setTimeout(() => {
        target.reset();
      }, 3000);
    } catch (error) {
      setStatus("...ERROR SENDING MESSAGE");
      toast.error("There was an error sending message, try again. " + error);
      console.log(error);
    } finally {
      setDone(false);
      setStatus("SEND MESSAGE");
    }
  };
  static getBlogPost = async (slug: string) => {
    const events = (await getDocuments()) as IPost[];
    const post = events.find((event) => event.slug === slug);
    if (!post) {
      return null;
    }
    return post;
  };
  static sortPostsByLatest = (posts: IPost[]): IPost[] => {
    return [...posts].sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.replace(",", "").split(" ");
      const [dayB, monthB, yearB] = b.date.replace(",", "").split(" ");

      const monthNumberA =
        monthCodes.find((m) => m.code === monthA)?.number || 0;
      const monthNumberB =
        monthCodes.find((m) => m.code === monthB)?.number || 0;

      const dateA = new Date(
        parseInt(yearA, 10),
        monthNumberA - 1,
        parseInt(dayA, 10)
      );
      const dateB = new Date(
        parseInt(yearB, 10),
        monthNumberB - 1,
        parseInt(dayB, 10)
      );

      return dateB.getTime() - dateA.getTime(); // Latest first
    });
  };

  static getAllDonations = async () => {
    const events = (await getDonations()) as DonationsType[];

    return events;
  };
  static getSingleDonation = async (slug: string) => {
    const events = (await getDonations()) as DonationsType[];
    const post = events.find((event) => event.slug === slug);
    if (!post) {
      return null;
    }
    return post;
  };
}
