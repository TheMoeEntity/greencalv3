"use client";
import styles from "./index.module.css";
import logo from "../../../../public/images/greencal_logo.png";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLinks } from "@/hooks";
import Icon from "@/components/shared/Icons";
import { EnvelopeIcon, MapPinIcon, Bars3Icon } from "@heroicons/react/24/solid";

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
      <div
        ref={headerRef}
        style={{ display: "flex" }}
        className={styles.headerOne}
      >
        <div>
          <div className='flex items-center gap-2'>
            <EnvelopeIcon className=" size-4" /> greencalfoundation@gmail.com
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
          <div className='flex items-center gap-2'>
            <MapPinIcon  className=" size-4" /> Opinion Nigeria LTD prince and
            princess ishieke Abakaliki &nbsp;&nbsp;&nbsp;
          </div>
        </div>

        <div>
          <div>
            {/* <i className="fa-brands fa-twitter"></i> */}
            <a href="https://instagram.com/greencalfoundation1" target="_blank">
              <Icon name="bxl-instagram" size="20px" />
            </a>
            {/* <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-pinterest"></i> */}
          </div>
        </div>
      </div>
      <div className={`${styles.headerTwo} ${sticky}`}>
        <div>
          <Link href={`/`}>
            <Image
              src={logo}
              alt="greencal logo"
              style={{ objectFit: "cover" }}
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
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
          <div>
            <a
              target={`_blank`}
              rel="noopener noreferrer"
              href="https://wa.me/+2348116177509"
              style={{ color: "white !important" }}
            >
              {`LETS`} TALK
            </a>
          </div>
        </div>
        <div onClick={show} className={styles.bars}>
          <Bars3Icon className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
