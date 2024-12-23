import Icon from "@/components/shared/Icons";
import React from "react";

const Hero_V2 = () => {
  return (
    <div className="min-h-[600px] max-h-auto">
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Where Compassion Meets Need.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Greencal Foundation provides hope and support through medical
              assitance, education, and community outreach.
            </p>
            <div className="flex items-center">
              <button className="bg-[#0C3429] text-white rounded-full py-3 px-[28px] text-sm">
                Know More
              </button>
              <div className="bg-[#A0C861] flex items-center justify-center -ml-4 text-white rounded-full w-10 h-10 text-sm">
                <span className="flex justify-center items-center rotate-45">
                  <Icon name="bx-up-arrow-alt" />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero_V2;
