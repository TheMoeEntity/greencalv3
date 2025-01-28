"use client";
import Icon from "@/components/shared/Icons";
import { DonationsType, donationType, IPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import event from "../../../../public/images/outreach.jpg";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const All_Donations = ({ donations }: { donations: DonationsType[] }) => {
  const [buttons, setButtons] = useState([
    { label: "All", isActive: true },
    { label: "Outreach", isActive: false },
    { label: "Healthcare", isActive: false },
  ]);

  const [filteredEvents, setFilteredEvents] =
    useState<DonationsType[]>(donations);

  const handleButtonClick = (index: number) => {
    const newButtons = buttons.map((btn, i) => ({
      ...btn,
      isActive: i === index,
    }));
    setButtons(newButtons);

    const activeButton = newButtons[index];
    if (activeButton.label === "All") {
      setFilteredEvents(donations);
    } else {
      setFilteredEvents(
        donations.filter((event) => event.category === activeButton.label)
      );
    }
  };

  return (
    <section className="container">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center p-3 items-center gap-3">
        {buttons.map((button, index) => (
          <button
            key={button.label}
            onClick={() => handleButtonClick(index)}
            className={`px-4 py-2 rounded-md border transition-colors ${
              button.isActive
                ? "bg-[var(--greencal-primary)] text-white"
                : "border-gray-300 text-gray-800 hover:bg-gray-100"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="w-16 mx-auto h-1 bg-[var(--greencal-primary)]"></div>
      <div className="p-3 md:p-8">
        {" "}
        <div className="container">
          <div className="mt-10 w-full grid mb-20 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredEvents.map((x) => {
                const progress = 8 + (x.raised / x.goal) * 100;
                const width = `w-[${progress}%]`;
                return (
                  <motion.div
                    key={x.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden bg-white rounded-xl shadow"
                  >
                    <div className="relative">
                      <div className="absolute top-3 right-3 py-2 px-3 text-sm rounded-lg bg-[var(--greencal-primary)] text-white">
                        {x.category}
                      </div>
                      <div className="absolute bottom-0 left-3 py-1 px-3 text-sm rounded-tl-lg rounded-tr-lg bg-[var(--greencal-main)] text-white">
                        {x.date}
                      </div>
                      <Image
                        alt="Greencal upcoming event event"
                        src={x.image}
                        width={300}
                        height={200}
                        className="object-cover w-full h-auto"
                      />
                    </div>

                    <div className="p-4">
                      <div className="mb-2 flex gap-4 text-xs">
                        <div className="flex items-center gap-2">
                          <Icon name="bx-time" color="#B6E4CE" size="15px" />
                          <span>{x.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="bx-map" color="#B6E4CE" size="15px" />
                          <span>{x.location}</span>
                        </div>
                      </div>

                      <p className="mb-3 font-bold text-left text-xl text-gray-700">
                        {x.name}
                      </p>

                      <Link
                        href={"/donations/" + x.slug}
                        className="flex items-center text-lg text-[#49BA82] gap-2"
                      >
                        Read More
                        <Icon
                          name="bx-chevron-right"
                          color="#49BA82"
                          size="30px"
                        />
                      </Link>

                      <div className="relative my-4 w-full h-3 bg-[var(--greencal-main)] rounded-full">
                        <div
                          className={`absolute top-0 left-0 h-full ${width} bg-[var(--greencal-primary)] rounded-full`}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-700">
                          <b className="text-black">
                            ₦ {x.raised.toLocaleString()}
                          </b>{" "}
                          of ₦ {x.goal.toLocaleString()} goal
                        </p>
                        <Link href={"/donations/" + x.slug}>
                          <Icon name="bx-donate-heart" size="25px" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default All_Donations;
