"use client";
import Icon from "@/components/shared/Icons";
import { faqs } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import charity from "../../../../../public/images/donation_charity_alt.jpg";
import brill from "../../../../../public/images/Brill-X.png";
import potens from "../../../../../public/images/Potens.png";
import dtcsi from "../../../../../public/images/DTCSI.png";

const FAQ = () => {
  const [faq, setFaqs] = useState(faqs);
  const FaqAction = (text: string) => {
    setFaqs((state) =>
      state.map((item) =>
        item.text === text
          ? { ...item, isActive: !item.isActive }
          : { ...item, isActive: false }
      )
    );
  };
  return (
    <>
      <div className="w-full bg-white p-3 md:p-10 flex gap-8 flex-col items-center text-center">
        <h2 className="text-4xl pt-5 md:text-5xl font-semibold text-[var(--greencal-main)]">
          Frequently Asked Questions
        </h2>
        <div className="w-16 h-1 bg-[var(--greencal-primary)]"></div>
        <div className="flex flex-col lg:flex-row items-center mt-8 gap-3">
          <div className="flex-1">
            {" "}
            <Image
              alt="Greencal event"
              src={charity}
              quality={100}
              className="object-cover rounded-xl overflow-hidden w-full h-auto"
            />
          </div>
          <div className="flex-1 flex gap-x-5">
            <div className="mx-auto px-0 lg:px-5 flex flex-col gap-3">
              {faq.map((x, i) => (
                <div className="w-full" key={i}>
                  <button
                    onClick={() => FaqAction(x.text)}
                    className={
                      "transition-colors duration-700 ease py-3 px-5 rounded-md flex items-center justify-between w-full " +
                      (x.isActive
                        ? "bg-[var(--greencal-primary)] text-white"
                        : "bg-[#F5F5F5]")
                    }
                  >
                    <span className="text-left font-extrabold text-sm md:text-lg">
                      {x.text}
                    </span>
                    {x.isActive ? (
                      <span
                        className={
                          ` transition-transform duration-700 ease justify-center items-center rounded-ful` +
                          (x.isActive
                            ? "rotate-45 text-white"
                            : "rotate-0 text-[var(--greencal-primary)]")
                        }
                      >
                        <Icon name="bx-minus" color="white" size="20px" />
                      </span>
                    ) : (
                      <span
                        className={
                          ` transition-transform duration-700 ease justify-center items-center rounded-ful` +
                          (x.isActive
                            ? "rotate-45 text-white"
                            : "rotate-0 text-[var(--greencal-primary)]")
                        }
                      >
                        <Icon
                          name="bx-plus"
                          color="var(--ditco-primary)"
                          size="20px"
                        />
                      </span>
                    )}
                  </button>
                  <div
                    dangerouslySetInnerHTML={{ __html: x.reply }}
                    className={`transition-all text-left text-sm duration-200 ease rounded-md px-5 overflow-hidden ${x.isActive === true ? `overflow-auto py-3 max-h-fit` : `max-h-0`}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full flex justify-center gap-6 lg:gap-x-16 items-center px-5 py-10 lg:py-20 bg-[#F5F5F5]">
        <div className="basis-[23%]">
          <Image
            alt="Greencal event"
            src={brill}
            quality={100}
            className="object-cover rounded-xl overflow-hidden w-full h-auto"
          />
        </div>
        <div className="basis-[23%]">
          <Image
            alt="Greencal event"
            src={potens}
            quality={100}
            className="object-cover rounded-xl overflow-hidden w-full h-auto"
          />
        </div>
        <div className="basis-[23%]">
          <Image
            alt="Greencal event"
            src={dtcsi}
            quality={100}
            className="object-cover rounded-xl overflow-hidden w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full lg:w-[95%] mx-auto my-16 flex gap-6 lg:flex-row flex-col p-3 md:p-5">
        <div className="flex lg:px-0 flex-col gap-3 flex-1 flex-wrap basis-full md:basis-[55%]">
          <h1 className="font-semibold text-3xl lg:text-[35px]">Kepha</h1>
          <div className="w-11 mt-2 h-[3px] bg-[#71CD6C]"></div>
          <p className="w-full md:mt-2 leading-loose text-sm">
            Medical student (Co founder, Greencal Foundation)
          </p>
          <p className="w-full leading-loose py-8 rounded-md px-4 bg-[#F5F5F5] text-sm">
            As a medical student witnessing the healthcare struggles faced by
            many in Abakaliki, I knew I had to act. Greencal Foundation allows
            me to combine my medical knowledge with a passion for social
            justice. Working alongside Adum and our dedicated team, we&#39;re
            actively improving access to quality healthcare in underserved
            communities. Together, we&#39;re building a healthier Abakaliki, one
            step at a time.
          </p>
          <button className="py-3 mt-4 rounded-lg px-4 w-fit flex text-white bg-[var(--greencal-primary)]">
            Watch Video{" "}
            <span className="ml-2  flex items-center">
              <Icon name="bxs-heart" />
            </span>
          </button>
        </div>
        <div className="basis-full overflow-hidden md:basis-[40%] flex justify-center items-center">
          <div
            style={{
              backgroundImage: "url('/images/brill.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[270px] rounded-full h-[270px] lg:w-[450px] lg:h-[450px]"
          ></div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
