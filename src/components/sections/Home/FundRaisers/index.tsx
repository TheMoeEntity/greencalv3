"use client";
import styles from "../../../../app/page.module.css";
import Link from "next/link";
import essay from "../../../../../public/images/essay.jpg";
import medical from "../../../../../public/images/sickle-cell.jpg";
import { eventCard, IPost } from "@/types";
import FeaturedCard from "@/components/shared/Cards/Featured";
import hygiene from "../../../../../public/images/Greencal Web Size.jpg";

const FundRaisers: React.FC<{ events: IPost[] }> = ({ events }) => {
  const blogs = [
    ...events,
    // {
    //   media: {
    //     banner: hygiene,
    //   },
    //   title:
    //     "UPCOMING EVENT: GREENCAL Foundation partners NAESMS for Education and awareness on menstrual hygiene.",
    //   explainer: "Event coming soon.",
    //   slug: "menstual-hygiene-awareness",
    // },
  ];
  return (
    <div id="events" className={`${styles.funds} pb-8`}>
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
        <ul className="px-0 py-0 list-group no-scrollbar list-group-horizontal position-relative overflow-scroll d-flex w-100 mb-5">
          {blogs.map((x, i) => (
            <li className="list-group-item mx-3 px-0 py-o border-0" key={i}>
              <FeaturedCard
                title={x.title}
                comingSoon={false}
                img={x.media.banner}
                slug={x.slug}
                content={x.explainer}
              />
            </li>
          ))}
        </ul>
      </div>
      <Link href="/events" className="">
        <div className="w-fit  py-3 px-3 bg-[#0C4949] text-white  mx-auto justify-center">
          View more &rarr;
        </div>
      </Link>
    </div>
  );
};

export default FundRaisers;
