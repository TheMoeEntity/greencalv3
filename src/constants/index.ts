import { eventCard } from "@/types";
import essay from "../../public/images/essay.jpg";
import medical from "../../public/images/sickle-cell.jpg";

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
