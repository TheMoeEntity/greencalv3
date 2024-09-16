import ContactForm from "@/components/shared/ContactForm";
import Hero_Shared from "@/components/shared/Hero_Shared";
import Icon from "@/components/shared/Icons";
import React from "react";

const Contact_Us = () => {
  return (
    <div>
      <Hero_Shared text={"Contact Us"} page="contact" />
      <div className="w-full mx-auto max-w-[1450px] flex flex-col lg:flex-row gap-10 py-10 lg:py-20 px-3 md:px-8">
        <div className="flex flex-col basis-full lg:basis-[30%] gap-5 md:px-5">
          <div>
            <h2 className="font-semibold text-2xl">GREENCAL FOUNDATION</h2>
            <p className="py-3 text-sm">
              We are dedicated to improving the lives of those facing illness,
              hardship, and limited opportunities.
            </p>
          </div>
          <div className="py-1">
            <h2 className="font-semibold text-2xl">CONTACT INFORMATION</h2>
            <p className="py-3 text-sm">
              Opinion Nigeria LTD prince and princess ishieke Abakaliki, UNILAG,
              Ebonyi State, Nigeria.
            </p>
            <div className="text-sm mt-3">
              <span className="flex items-center gap-2">
                <Icon name="bx-phone-call" color="#71CD6D" size="20px" />{" "}
                (+234) 811 617 7509, (+234) 803 656 5354
              </span>
            </div>
            <div className="text-sm mt-3">
              <span className="flex items-center gap-2">
                <Icon name="bx-envelope" color="#71CD6D" size="20px" />{" "}
                greencalfoundation@gmail.com
              </span>
            </div>
            <div className="text-sm mt-3">
              <span className="flex items-center gap-2">
                <Icon name="bx-time" color="#71CD6D" size="20px" />{" "}
                Monday - Fridays 8:00 AM to 6:00 PM
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full lg:px-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
