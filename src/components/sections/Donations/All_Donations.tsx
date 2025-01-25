"use client";
import Icon from "@/components/shared/Icons";
import { DonationsType, donationType, IPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import event from "../../../../public/images/outreach.jpg";
import React, { useState } from "react";

const All_Donations = ({ donations }: { donations: DonationsType[] }) => {
  const [buttons, setButtons] = useState([
    { label: "All", isActive: true },
    { label: "Education", isActive: false },
    { label: "Healthcare", isActive: false },
  ]);

  const [filteredEvents, setFilteredEvents] = useState<IPost[]>([]);

  //  const handleButtonClick = (index: number) => {
  //    const newButtons = buttons.map((btn, i) => ({
  //      ...btn,
  //      isActive: i === index,
  //    }));
  //    setButtons(newButtons);

  //    const activeButton = newButtons[index];
  //    if (activeButton.label === "All") {
  //      setFilteredEvents(events);
  //    } else {
  //      setFilteredEvents(
  //        events.filter((event) => event.category === activeButton.label)
  //      );
  //    }
  //  };

  return (
    <section>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center p-3 items-center gap-3">
        {buttons.map((button, index) => (
          <button
            key={button.label}
            onClick={() => {}}
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
        <div className="mt-10 w-fit mx-auto justify-center grid mb-20 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {donations.map((x, i) => (
            <div
              key={i}
              className="overflow-hidden max-w-sm bg-white rounded-xl shadow"
            >
              <div className="relative">
                <div className="absolute top-3 right-3 py-2 px-3 text-sm rounded-lg bg-[var(--greencal-primary)] text-white">
                  {x.category}
                </div>
                <div className="absolute bottom-0 left-3 py-1 px-3 text-sm rounded-tl-lg rounded-tr-lg bg-[var(--greencal-main)] text-white">
                  {x.date}
                </div>
                <Image
                  alt="Greencal event"
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

                <button className="flex items-center text-lg text-[#49BA82] gap-2">
                  Read More
                  <Icon name="bx-chevron-right" color="#49BA82" size="30px" />
                </button>

                <div className="relative my-4 w-full h-3 bg-[var(--greencal-main)] rounded-full">
                  <div className="absolute top-0 left-0 h-full w-[65%] bg-[var(--greencal-primary)] rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-700">
                    <b className="text-black">₦ {x.raised.toLocaleString()}</b>{" "}
                    of ₦ {x.goal.toLocaleString()} goal
                  </p>
                  <Link href={"/donations/" + x.slug}>
                    <Icon name="bx-donate-heart" size="25px" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default All_Donations;
