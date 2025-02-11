import ContactForm from "@/components/shared/ContactForm";
import Hero_Shared from "@/components/shared/Hero_Shared";
import Icon from "@/components/shared/Icons";
import Image from "next/image";
import React from "react";
import gradient from "../../../public/images/Ellipse.png";

const Contact_Us = () => {
  return (
    <div>
      <Hero_Shared text={"Contact Us"} page="contact" />
      <div className="w-full relative md:w-[90%] mx-auto max-w-[1450px] flex flex-col lg:flex-row gap-10 py-10 lg:py-20 px-3 md:px-5 lg:px-20">
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
              <span className="flex w-16 h-16 min-w-16 max-w-16 min-h-16 max-h-16 justify-center items-center rounded-full bg-[#A0C861]">
                <Icon name="bxs-phone-call" color="white" size="35px" />
              </span>
              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-semibold text-xl">Call Us</h4>
                <span>
                  <a href="tel:+2348116177509">(+234) 811 617 7509,</a>
                  <a href="tel:+2348036565354"> (+234) 803 656 5354</a>{" "}
                </span>
              </div>
            </div>
            <div className="text-sm flex gap-3">
              <span className="flex w-16 h-16 min-w-16 max-w-16 min-h-16 max-h-16  justify-center items-center rounded-full bg-[#A0C861]">
                <Icon name="bxs-envelope" color="#ffff" size="35px" />
              </span>
              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-semibold text-xl">Mail Us</h4>
                <a href="mailto:greencalfoundation1@gmail.com">
                  greencalfoundation1@gmail.com
                </a>
              </div>
            </div>
            <div className="text-sm flex gap-3">
              <span className="flex w-16 h-16 min-w-16 max-w-16 min-h-16 max-h-16 justify-center items-center rounded-full bg-[#A0C861]">
                <Icon name="bxs-map" color="#ffff" size="35px" />
              </span>
              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-semibold text-xl">Visit Us</h4>
                <span>
                  Opinion Nigeria LTD prince and princess ishieke Abakaliki,
                  Ebonyi State, Nigeria.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 shadow-2xl pt-10 rounded-xl flex-1 w-full px-3 lg:px-5">
          <h1 className="px-1 md:px-4 font-semibold text-2xl md:text-3xl">
            Fill The Form Below
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
