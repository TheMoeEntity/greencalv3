import Blog_Details from "@/components/sections/Blog/Blog_Details";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title:
    "Greencal Foundation celebrates World Sickle Cell Day with donation at AEFUTHA",
  description:
    "Greencal Foundation in collaboration with MWAN Ebonyi State celebrates World Sickle Cell Day with donation at AEFUTHA",
  keywords:
    "Greencal Foundation, Adum Abraham Obinna, sickle-cell, sickle cell day,  Mrs. Juliana Calista Adum, charity, education, outreach, scholarships, Abakaliki, Ebonyi State, Nigeria, BrillX",
  authors: [{ name: "Moses Chukwudi Nwigberi" }],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Greencal Foundation",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};
const EventsPage = () => {
  return (
    <div className="bg-[#FBF8F3]">
      <Blog_Details />
    </div>
  );
};

export default EventsPage;
