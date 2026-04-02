"use client";
import Icon from "@/components/shared/Icons";
import { IPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Events_Client = ({ events }: { events: IPost[] }) => {
  const uniqueCategories = Array.from(
    new Set(events.map((event) => event.category))
  );
  const donationTypes = uniqueCategories.map((category) => ({
    label: category,
    isActive: false,
  }));
  const [buttons, setButtons] = useState([
    { label: "All", isActive: true },
    ...donationTypes,
  ]);

  const [filteredEvents, setFilteredEvents] = useState<IPost[]>(events);

  const handleButtonClick = (index: number) => {
    const newButtons = buttons.map((btn, i) => ({
      ...btn,
      isActive: i === index,
    }));
    setButtons(newButtons);

    const activeButton = newButtons[index];
    if (activeButton.label === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter((event) => event.category === activeButton.label)
      );
    }
  };

  return (
    <div className="w-full bg-white p-3 md:p-10 flex gap-8 flex-col items-center text-center">
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
      <div className="w-16 h-1 bg-[var(--greencal-primary)]"></div>

      {/* Events */}
      <div className="mt-10 justify-center flex gap-4 flex-wrap">
        <AnimatePresence>
          {filteredEvents.map((x, i) => (
            <motion.div
              key={x.slug}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="basis-full md:basis-[43%] flex flex-col overflow-hidden bg-white rounded-xl"
            >
              <div className="overflow-hidden relative">
                <div className="absolute top-3 right-3 py-2 px-3 text-sm rounded-lg bg-[var(--greencal-primary)] text-white">
                  {x.category}
                </div>
                <Image
                  alt="Greencal event"
                  src={x.media.banner}
                  width={500}
                  priority={true}
                  height={100}
                  quality={100}
                  className="object-cover rounded-bl-xl rounded-br-xl overflow-hidden w-full h-auto"
                />
              </div>
              <div className="py-3 px-2">
                <div className="w-full mb-2 flex gap-3">
                  <div className="flex text-[var(--greencal-primary)] items-center gap-1">
                    <span className="flex justify-center items-center">
                      <Icon
                        name="bx-calendar"
                        color="var(--greencal-primary)"
                        size="25px"
                      />
                    </span>
                    <span className="text-lg">{x.date}</span>
                  </div>
                </div>
                <p className="mb-3 font-bold text-left text-2xl text-gray-700 ">
                  {x.title}
                </p>
                <div className="w-[30%] h-[5px] my-3 rounded-full bg-[var(--greencal-primary)]"></div>
                <p className="text-gray-500 text-left">{x.explainer}</p>
                <Link
                  href={"/events/" + x.slug}
                  className="flex mt-5 text-[var(--greencal-primary)] text-lg gap-2 items-center"
                >
                  Read More{" "}
                  <span className="flex justify-center items-center">
                    <Icon name="bx-chevron-right" color="inherit" size="30px" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <i aria-hidden className="basis-[43%]"></i>
        <i aria-hidden className="basis-[43%]"></i>
      </div>
    </div>
  );
};

export default Events_Client;
