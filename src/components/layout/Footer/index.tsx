import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/greencal_white.png";
import Icon from "@/components/shared/Icons";
import gradient from "../../../../public/images/Mask group.png";

const Footer = () => {
  return (
    <div className="relative">
      <footer
        className="w-full text-white bg-[var(--greencal-main)] py-5 p-3 md:px-10 md:py-12"
        style={{
          backgroundImage: "url('/images/Mask group-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto w-full md:w-[85%] flex flex-col lg:flex-row flex-wrap gap-10">
          {/* Logo and Intro Section */}
          <div className="flex-1 flex flex-col gap-4 text-left">
            <div
              style={{
                backgroundImage: "url('/images/greencal_white.png')",
                backgroundSize: "250px",
                backgroundPosition: "center",
              }}
              className="w-[130px] rounded-full h-[130px]"
            ></div>
            <p className="text-sm -mt-7">
              Greencal Foundation: Where Compassion Meets Needs
            </p>
            <p className="text-sm font-light">
              Opening Hours: Mon - Sat: 8am to 5pm
            </p>
          </div>

          {/* Services Section */}
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-bold mt-4 text-xl md:text-2xl text-left">
              Our Services
            </h3>
            <ul className="text-sm font-light space-y-2">
              <li>Grants and Education</li>
              <li>Food and Education</li>
              <li>Outreach</li>
              <li>International Collaboration</li>
              <li>Donations</li>
              <li>Medical Outreach</li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="font-bold mt-4 text-xl md:text-2xl text-left">
              Contact Info
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--greencal-primary)] flex justify-center items-center">
                <Icon
                  name="bxs-phone-call"
                  color="var(--greencal-main)"
                  size="25px"
                />
              </div>
              <div>
                <p className="font-semibold">Call us</p>
                <p className="text-xs my-1 font-light">(+234) 811 617 7509</p>
                <p className="text-xs my-1 font-light">(+234) 803 656 5354</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--greencal-primary)] flex justify-center items-center">
                <Icon
                  name="bxs-envelope"
                  color="var(--greencal-main)"
                  size="25px"
                />
              </div>
              <div>
                <p className="font-semibold">Mail us</p>
                <a
                  href="mailto:greencalfoundation@gmail.com"
                  className="text-sm font-light"
                >
                  greencalfoundation@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 min-w-12 min-h-12 rounded-full bg-[var(--greencal-primary)] flex justify-center items-center">
                <Icon name="bxs-map" color="var(--greencal-main)" size="25px" />
              </div>
              <div>
                <p className="font-semibold">Visit us</p>
                <p className="text-sm font-light">
                  Opinion Nigeria LTD, Prince and Princess Ishieke Abakaliki
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Bottom */}
      <div className="w-full text-center bg-[var(--greencal-primary)] text-[var(--greencal-main)] p-3">
        &copy; {new Date().getFullYear()} Greencal Foundation. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
