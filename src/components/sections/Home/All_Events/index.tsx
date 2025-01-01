import React from "react";
import event from "../../../../../public/images/outreach.jpg";
import event2 from "../../../../../public/images/medical.jpeg";
import Image from "next/image";
import Icon from "@/components/shared/Icons";
import { IPost } from "@/types";
import Link from "next/link";
const All_Events: React.FC<{ events: IPost[] }> = ({ events }) => {
  return (
    <div>
      <div className="w-full bg-[var(--greencal-main)] p-10 flex gap-8 flex-col items-center text-center">
        <h2 className="text-4xl pt-5 pb-3 md:text-5xl font-semibold text-white">
          Upcoming Events
        </h2>
        <div className="w-16 h-1 bg-[var(--greencal-primary)]"></div>
        <div className="mt-10 flex gap-4">
          {[...Array(3)].map((_x, i) => (
            <div
              key={i}
              className="max-w-sm overflow-hidden bg-white rounded-xl shadow"
            >
              <div className="overflow-hidden relative">
                <div className="absolute top-3 right-3 py-2 px-3 text-sm rounded-lg bg-[var(--greencal-primary)] text-white">
                  Health Care
                </div>
                <div className="absolute bottom-0 left-3 py-1 px-3 text-sm rounded-tl-lg rounded-tr-lg bg-[var(--greencal-main)] text-white">
                  21 June 2025
                </div>
                <Image
                  alt="Greencal event"
                  src={event}
                  className="object-cover overflow-hidden w-full h-auto"
                />
              </div>
              <div className="p-3">
                <div className="w-full mb-2 flex gap-3">
                  <div className="flex items-center gap-1">
                    <span className="flex justify-center items-center">
                      <Icon name="bx-time" color="#B6E4CE" size="15px" />
                    </span>
                    <span className="text-xs">09:00 AM</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="flex justify-center items-center">
                      <Icon name="bx-map" color="#B6E4CE" size="15px" />
                    </span>
                    <span className="text-xs">FETHA Abakaliki, Ebonyi.</span>
                  </div>
                </div>
                <p className="mb-3 font-bold text-left text-2xl text-gray-700 ">
                  End of Year Festivities
                </p>
                <button className="flex text-[#49BA82] text-lg gap-2 items-center">
                  Read More{" "}
                  <span className="flex justify-center items-center">
                    <Icon name="bx-chevron-right" color="#49BA82" size="30px" />
                  </span>
                </button>
                <div className="w-full my-3 rounded-full h-3 bg-[var(--greencal-main)] relative">
                  <div className="w-[65%] h-full rounded-full bg-[var(--greencal-primary)]"></div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="mb-3 font-light text-left text-gray-700 ">
                    <b className="font-bold text-black">N 1,780,550 </b>
                    of N2,000,000 goal
                  </p>
                  <Icon name="bx-hand" size="13px" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {events && events.length > 0 && (
        <div className="w-full bg-white p-10 flex gap-8 flex-col items-center text-center">
          <h2 className="text-4xl pt-5 md:text-5xl font-semibold">
            Previous Events
          </h2>
          <div className="w-16 h-1 bg-[var(--greencal-primary)]"></div>
          <div className="mt-10 justify-center flex gap-4 flex-wrap">
            {events.map((x, i) => (
              <div
                key={i}
                className="basis-[43%] flex flex-col overflow-hidden bg-white rounded-xl"
              >
                <div className="overflow-hidden relative">
                  <div className="absolute top-3 right-3 py-2 px-3 text-sm rounded-lg bg-[var(--greencal-primary)] text-white">
                    {x.category}
                  </div>
                  <Image
                    alt="Greencal event"
                    src={x.media.banner}
                    width={500}
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
                      <span className="text-lg">23rd May, 2025</span>
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
                      <Icon
                        name="bx-chevron-right"
                        color="inherit"
                        size="30px"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
            <i aria-hidden className="basis-[43%]"></i>
            <i aria-hidden className="basis-[43%]"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default All_Events;
