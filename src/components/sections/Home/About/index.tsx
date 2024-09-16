"use client";
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../../../../public/images/outreach6.jpg";
import man2 from "../../../../../public/images/outreach5.jpg";
import { UsersIcon, AcademicCapIcon, UserGroupIcon, LightBulbIcon } from "@heroicons/react/24/solid";

import { useRouter } from "next/navigation";
import shape from "../../../../../public/images/shape-1.png";
import { useInView } from "react-intersection-observer";
import { useReveal } from "@/hooks";
import Icon from "@/components/shared/Icons";
const About = () => {
  const { push, visible, ref } = useReveal(useInView);

  return (
    <div className={styles.about}>
      <div className={styles.cards}>
        <div>
          <div style={{ width: "60px", height: "60px", fontSize: "40px" }}>
            <LightBulbIcon className="h-10 w-10" />
          </div>
          <div>
            <strong>Empowering Communities </strong>
          </div>
          <div>
            <p>
              Providing a helping hand in various areas including education,
              medical assistance and community support.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px", fontSize: "40px" }}>
            <UserGroupIcon className="h-10 w-10" />
          </div>
          <div>
            <strong>Outreach</strong>
          </div>
          <div>
            <p>
              Extending a helping hand to our local communities through
              impactful outreach initiatives.
            </p>
          </div>
        </div>
        <div>
          <div style={{ width: "60px", height: "60px", fontSize: "40px" }}>
            <AcademicCapIcon className="h-10 w-10" />
          </div>
          <div>
            <strong>Grants & Scholarships</strong>
          </div>
          <div>
            <p>
              Fueling dreams with opportunities through grants and scholarships
              for aspiring minds.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div
          className={visible ? `${styles.man} ${styles.animClass}` : styles.man}
        >
          <Image
            src={man}
            alt="One of our school outreach programs"
            style={{ objectFit: "cover" }}
            fill
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className={
            visible ? `${styles.stuff} ${styles.animClass2}` : styles.stuff
          }
        >
          <div ref={ref} className={styles.test}></div>
          <h4 className="text-xl">WELCOME TO GREENCAL FOUNDATION</h4>
          <h2>
            Empowering Lives, Building Futures: Our Commitment to Positive
            Change.
          </h2>
          <p>
            Greencal Foundation is a non-profit organization based in Abakaliki,
            Ebonyi State, Nigeria. We are dedicated to improving the lives of
            those facing illness, hardship, and limited opportunities.
          </p>
          <p>
            At Greencal Foundation, {`we're `} passionate about transforming
            lives in Abakaliki, Ebonyi State...
          </p>
          <button style={{ color: "white" }} onClick={() => push("/about")}>
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
