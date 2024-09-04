"use client";
import styles from "../../../../app/page.module.css";
import Link from "next/link";
import essay from "../../../../../public/images/essay.jpg";
import medical from "../../../../../public/images/sickle-cell.jpg";
import { eventCard } from "@/types";
import FeaturedCard from "@/components/shared/Cards/Featured";

const FundRaisers = () => {
  const content: eventCard[] = [
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
      content: "As part of the activities to mark World Sickle Cell Day 2024, the Alex Ekwueme Federal University Teaching Hospital Abakaliki (AEFUTHA) celebrated...",
      comingSoon: false,
      slug:'sickle-cell-day'
    },
  ];
  return (
    <div id="events" className={styles.funds}>
      <div className="container">
        <div className="row mb-3 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="text-4xl font-medium">Latest Events</h2>
            <p className="lead">
              Your Donations help determine the fate of children
            </p>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <ul className="px-0 py-0 list-group list-group-horizontal position-relative overflow-scroll d-flex w-100 mb-5">
          {content.map((x, i) => (
            <li className="list-group-item mx-3 px-0 py-o border-0" key={i}>
              <FeaturedCard
                title={x.title}
                comingSoon={x.comingSoon}
                img={x.img}
                slug={x.slug}
                content={x.content}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FundRaisers;
