"use client";
import styles from "./index.module.css";
import logo from "../../../../public/images/greencal_logo.png";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLinks } from "@/hooks";
import Icon from "@/components/shared/Icons";
import {
  EnvelopeIcon,
  MapPinIcon,
  Bars3Icon,
  LinkSlashIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const { push } = useRouter();
  const { links, sidebar, setSideBar } = useLinks();
  const sideContent = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (!headerRef.current) {
      return;
    }
    let number = headerRef.current.style.display === "" ? 120 : 175;
    const stickyClass = scrollTop >= number ? styles.isSticky : "";
    setSticky(stickyClass);
  };

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      if (!sideContent.current) {
        return;
      }
      sideContent.current.style.width = "70%";
      sideContent.current.style.visibility = "visible";
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      if (!sideContent.current) {
        return;
      }
      sideContent.current.style.width = "0%";
      sideContent.current.style.visibility = "hidden";
    }, 400);
  };

  const linkAction = (link?: string): void => {
    setSideBar(false);
    link === "home" ? push("/") : push("/" + link);
  };

  return (
    <div className={styles.header}>
      <div
        style={{ right: sidebar ? "0%" : "-100%" }}
        className={styles.sidebar}
      >
        <div ref={sideContent} className={styles.sidecontent}>
          <div onClick={hide} className={styles.close}>
            &times;
          </div>
          <ul>
            {links.map((x, i) => (
              <li
                className={x.isActive ? styles.active : ""}
                onClick={() => linkAction(x.href)}
                key={i}
              >
                {x.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${styles.headerTwo} ${sticky}`}>
        <Link
          href={"/"}
          style={{
            backgroundImage: "url('/images/greencal_logo.png')",
            backgroundSize: "180px",
            backgroundPosition: "center",
          }}
          className="w-[130px] rounded-full h-[130px]"
        ></Link>
        <div className={styles.links}>
          <ul>
            {links.map((x, i) => (
              <li
                className={x.isActive ? styles.active : ""}
                onClick={() => linkAction(x.href)}
                key={i}
              >
                {x.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.search}>
          {/* <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div> */}
          <button>
            <a
              rel="noopener noreferrer"
              href="https://wa.me/+2348116177509?text=Hello,%20I%20am%20reaching%20out%20from%20the%20GreenCal%20Foundation%20website.%20I%20would%20love%20to%20learn%20more%20about%20your%20initiatives%20and%20explore%20ways%20we%20can%20collaborate%20or%20support%20your%20mission.%20Looking%20forward%20to%20hearing%20from%20you!"
              target="_blank"
              className="text-white rounded-full bg-[#135342] py-3 px-4"
              style={{ color: "white !important" }}
            >
              Chat Us
            </a>
          </button>
        </div>
        <div onClick={show} className={styles.bars}>
          <Icon
            name="bx-menu-alt-right"
            color="var(--greencal-main)"
            size="40px"
          />
          {/* <Bars3Icon className="size-6" /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
