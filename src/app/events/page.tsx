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

const AllEvents = async () => {
  const events = await getDocuments();
  const allEvents = events as IPost[];
  const blogs = [
    ...allEvents,
    //  {
    //    media: {
    //      banner: hygiene,
    //    },
    //    title:
    //      "UPCOMING EVENT: GREENCAL Foundation partners NAESMS for Education and awareness on menstrual hygiene.",
    //    explainer: "Event coming soon.",
    //    slug: "menstual-hygiene-awareness",
    //  },
  ];
  return (
    <div>
      <Hero_Shared page="events" text="Events" />
      <Events_Client events={allEvents} />
    </div>
  );
};

export default AllEvents;
