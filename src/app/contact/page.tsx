import ContactForm from "@/components/shared/ContactForm";
import Hero_Shared from "@/components/shared/Hero_Shared";
import Icon from "@/components/shared/Icons";
import React from "react";

const Contact_Us = () => {
  return (
    <div>
      <Hero_Shared text={"Contact Us"} page="contact" />
      <div className="w-full mx-auto max-w-[1450px] flex flex-col lg:flex-row gap-10 py-10 lg:py-20 px-3 md:px-5 lg:px-20">
        <div className="flex flex-col basis-full lg:basis-[50%] gap-5 md:px-5">
          <div>
            <h2 className="font-semibold text-2xl md:text-4xl text-[#0C3429]">
              GREENCAL FOUNDATION
            </h2>
            <div className="w-24 mt-3 h-1 bg-[#A0C861]"></div>
            <p className="py-3 text-sm">
              We are dedicated to improving the lives of those facing illness,
              hardship, and limited opportunities.
            </p>
          </div>
          <div className="py-1 flex flex-col gap-5">
            <div className="text-sm flex gap-3">
              <span className="flex w-20 h-20 justify-center rounded-full bg-[#A0C861] items-center gap-2">
                <Icon name="bx-phone-call" color="white" size="35px" />
              </span>
              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-semibold text-xl">Call Us</h4>
                <span>(+234) 811 617 7509, (+234) 803 656 5354</span>
              </div>
            </div>
            <div className="text-sm flex gap-3">
              <span className="flex w-20 h-20 justify-center rounded-full bg-[#A0C861] items-center gap-2">
                <Icon name="bx-envelope" color="#ffff" size="35px" />{" "}
              </span>
              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-semibold text-xl">Mail Us</h4>
                <span>greencalfoundation@gmail.com</span>
              </div>
            </div>
            <div className="text-sm flex gap-3">
              <span className="flex w-20 h-20 justify-center rounded-full bg-[#A0C861] items-center gap-2">
                <Icon name="bx-map" color="#ffff" size="35px" />{" "}
              </span>
              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-semibold text-xl">Visit Us</h4>
                <span>
                  Opinion Nigeria LTD prince and princess ishieke Abakaliki, Ebonyi State, Nigeria.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 shadow-2xl pt-10 rounded-xl flex-1 w-full lg:px-5">
          <h1 className="px-4 font-semibold text-3xl md:text-4xl">
            Fill The Form Below
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
