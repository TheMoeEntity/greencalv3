import Icon from "@/components/shared/Icons";
import Image from "next/image";
import React from "react";
import logo from "../../../../../public/images/Placeholder.png";
import card from "../../../../../public/images/Card.png";
import hearts from "../../../../../public/images/heart.png";
import Link from "next/link";

const Hero_V2 = () => {
  return (
    <div className="min-h-[600px] max-h-auto">
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 gap-y-12 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Where Compassion Meets Need.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Greencal Foundation provides hope and support through medical
              assistance, education, and community outreach.
            </p>
            <div className="flex items-center">
              <Link
                href="/about"
                className="bg-[#0C3429] text-white rounded-full py-3 px-[28px] text-sm"
              >
                Know More
              </Link>
              <div className="bg-[#A0C861] flex items-center justify-center -ml-4 text-white rounded-full w-10 h-10 text-sm">
                <span className="flex justify-center items-center rotate-45">
                  <Icon name="bx-up-arrow-alt" />
                </span>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-5 flex justify-center flex-col md:flex-row lg:flex gap-y-10 lg:flex-col gap-3">
            <span className="w-full md:w-[90%] relative">
              <div className="absolute hidden lg:block -top-8 -right-12">
                {" "}
                <Image
                  alt="Hearts"
                  src={hearts}
                  className="object-cover w-full h-auto"
                />
              </div>
              <Image
                alt="Greencal Logo"
                src={logo}
                className="object-cover w-full h-auto"
              />
            </span>
            <div className="flex flex-col lg:flex-row flex-1 gap-2">
              <div className="px-4 lg:invisible xl:visible md:mt-0 py-6 flex-1 flex-col gap-3 flex rounded-xl font-semibold bg-[var(--greencal-main)] text-white">
                <span> Together, We Empower Our Communities</span>
                <p className="text-xs text-gray-500">
                  Supporting healthcare, education, and faith-based initiatives
                  in Abakaliki, Ebonyi State.
                </p>
              </div>
              <div className="basis-full lg:basis-[55%] lg:-mt-12">
                <Image
                  alt="Greencal Logo"
                  src={card}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero_V2;
