export const revalidate = 0;
import Hero_Shared from "@/components/shared/Hero_Shared";
import React from "react";
import styles from "../page.module.css";
import { content } from "@/constants";
import FeaturedCard from "@/components/shared/Cards/Featured";
import { getDocuments } from "@/helpers/lib/firebase";
import hygiene from "../../../public/images/Greencal Web Size.jpg";
import { IPost } from "@/types";
import Link from "next/link";
import Icon from "@/components/shared/Icons";
import Image from "next/image";
import Events_Client from "@/components/sections/Events/Events_Client";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Greencal Foundation - Events",
  description:
    "Discover upcoming events and community outreach programs hosted by Greencal Foundation. Join us and be a part of our mission to empower lives.",
  keywords:
    "Greencal Foundation, events, charity, community outreach, workshops, fundraisers",
  authors: [
    { name: "Moses Chukwudi Nwigberi", url: "https://moewebverse.vercel.app" },
  ],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Greencal Foundation",
};
const AllEvents = async () => {
  const events = await getDocuments();
  const allEvents = events as IPost[];
  return (
    <div>
      <Hero_Shared page="events" text="Events" />
      <Events_Client events={allEvents} />
    </div>
  );
};

export default AllEvents;
