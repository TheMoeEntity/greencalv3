import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/greencal_white.png";
import Icon from "@/components/shared/Icons";

const Footer = () => {
  return (
    <div>
      <footer className="w-full text-white bg-[var(--greencal-main)] p-10">
        <div className="container flex flex-wrap space-x-16 mx-auto w-full md:w-[85%] p-4">
          <div className="flex-1 flex font-light flex-col gap-4">
            <span className="w-full md:w-[70%]">
              <Image
                alt="Greencal Logo"
                src={logo}
                className="object-contain w-full h-auto"
              />
            </span>
            <span className="-mt-16">
              Greencal Foundation: Where Compassion Meets Needs
            </span>
            <span>Opening Hours : Monday Sat: 8am to 5pm</span>
          </div>
          <div className="flex-1 flex flex-col gap-3 md:pt-16">
            <h3 className="font-bold text-2xl">Our Services</h3>
            <div className="flex font-light text-sm flex-col gap-3">
              <span>Grants and Education</span>
              <span>Food and Education</span>
              <span>Outreach</span>
              <span>International Collaboration</span>
              <span>Donations</span>
              <span>Medical Outreach</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:pt-16">
            <h3 className="font-bold text-2xl">Contact Info</h3>
            <div className="flex font-light flex-col gap-7">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--greencal-primary)] flex justify-center items-center">
                  <Icon
                    name="bxs-phone-call"
                    color="var(--greencal-main)"
                    size="25px"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <b>Call us</b>
                  <span className="text-xs">(+234) 811 617 7509 </span>
                  <span className="text-xs">(+234) 803 656 5354</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--greencal-primary)] flex justify-center items-center">
                  <Icon
                    name="bxs-envelope"
                    color="var(--greencal-main)"
                    size="25px"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <b>Mail us</b>
                  <span className="text-xs">
                    <a href="mailto:greencalfoundation@gmail.com">
                      greencalfoundation@gmail.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--greencal-primary)] flex justify-center items-center">
                  <Icon
                    name="bxs-map"
                    color="var(--greencal-main)"
                    size="25px"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <b>Visit us</b>
                  <span className="whitespace-nowra text-xs">
                    Opinion Nigeria LTD prince and princess ishieke Abakaliki
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full text-center bg-[var(--greencal-primary)] text-[var(--greencal-main)] p-3">
        &copy; {new Date().getFullYear()} Greencal Foundation.
      </div>
    </div>
  );
};

export default Footer;
