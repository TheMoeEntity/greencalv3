import Hero_Shared from "@/components/shared/Hero_Shared";
import React from "react";
import styles from "../page.module.css";
import { content } from "@/constants";
import FeaturedCard from "@/components/shared/Cards/Featured";

const AllEvents = () => {
  return (
    <div>
      <Hero_Shared page="events" text="Our Events" />
      <div className="w-full flex gap-10 lg:flex-row flex-col p-3 md:p-8">
        <div className="container py-8">
          <div className="row mb-3 justify-content-center">
            <div className="col-md text-center">
              <h2 className="text-4xl font-medium">Our Events</h2>
              <p className="lead mt-3">
                Your Donations help determine the fate of children
              </p>
            </div>
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

export default AllEvents;
