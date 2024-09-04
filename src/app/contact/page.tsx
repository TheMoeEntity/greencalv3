import ContactForm from "@/components/shared/ContactForm";
import Hero_Shared from "@/components/shared/Hero_Shared";
import React from "react";

const Contact_Us = () => {
  return (
    <div>
      <Hero_Shared text={"Contact Us"} page="contact" />
      <div className="w-full mx-auto max-w-[1450px] flex gap-10 py-10 lg:py-20 px-5 md:px-8 flex-wrap">
        <div className="flex basis-full lg:basis-[30%] md:px-5 flex-col gap-5">
          <div className="">
            <h2 className="font-semibold text-2xl">GREENCAL FOUNDATION</h2>
            <p className="py-3 text-sm text-justify">
              We are dedicated to improving the lives of those facing illness,
              hardship, and limited opportunities.
            </p>
          </div>
          <div className=" py-1">
            <h2 className="font-semibold text-2xl">CONTACT INFORMATION</h2>
            <p className="py-3 text-sm">
              Opinion Nigeria LTD prince and princess ishieke Abakaliki, UNILAG,
              Ebonyi State, Nigeria.
            </p>
            <div className="text-sm mt-3">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-phone"></i> (+234) 811 617 7509, (234)
                803 656 5354
              </span>
            </div>
            <div className="text-sm mt-3">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-envelope"></i>{" "}
                greencalfoundation@gmail.com
              </span>
            </div>
            <div className="text-sm mt-3">
              <span className="flex items-center gap-2">
                <i className="fas fa-clock"></i> Monday - Fridays 8:00 AM to
                6:00 PM
              </span>
            </div>
          </div>
          {/* <div className="">
            <h2 className="font-semibold text-2xl">SOCIAL LINKS</h2>
            <div className="flex gap-3 text-2xl mt-5">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div> */}
        </div>
        <div className="flex flex-1 lg:px-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
