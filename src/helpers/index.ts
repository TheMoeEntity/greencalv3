import axios from "axios";
import { FormEvent } from "react";
import { EnqueueSnackbar } from "notistack";
import essay from "../../public/images/essay.jpg";
import medical from "../../public/images/medical.jpeg";
import { eventCard, IPost, linkType } from "@/types";
import { getDocuments } from "./lib/firebase";

export class Helpers {
  static leaders = [
    {
      name: "Adum Obinna",
      position: "Founder",
      info: "Adum Obinna, a passionate philanthropist, Economics student and owner of BrillX, in Ebonyi State, established Greencal Foundation in memory of his inspiring mother. Witnessing her dedication to helping others ignited a fire in him to continue her legacy of giving back to the community.",
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
    // {
    //   name: "Gallery",
    //   isActive: false,
    //   href: "gallery",
    // },
    {
      name: "Contact",
      isActive: false,
      href: "contact",
    },
  ];
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
    enqueueSnackbar: EnqueueSnackbar
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
      enqueueSnackbar("Full name cannot be empty", {
        variant: "error",
      });
      return;
    } else if (data.subject === "" || data.subject === "--Choose--") {
      enqueueSnackbar("Specify a subject", {
        variant: "error",
      });
      return;
    } else if (data.message.trim() === "" || data.message.length < 10) {
      enqueueSnackbar("Message cannot be empty or short", {
        variant: "error",
      });
      return;
    }
    console.log(data);
    setDone(true);
    setStatus("SENDING....");
    try {
      const url = "/api/contact";
      const res = await axios.post(url, data);

      res.status === 200 &&
        enqueueSnackbar("Message successfully sent", {
          variant: "success",
        });
      setStatus("MESSAGE SENT");
      setTimeout(() => {
        target.reset();
      }, 3000);
    } catch (error) {
      setStatus("...ERROR SENDING MESSAGE");
      enqueueSnackbar(
        "There was an error sending message, try again. " + error,
        {
          variant: "error",
        }
      );
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
}
