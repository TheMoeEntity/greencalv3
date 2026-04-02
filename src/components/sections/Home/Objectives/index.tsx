import Icon from "@/components/shared/Icons";
import React from "react";

const Objectives = () => {
  return (
    <div className="flex flex-col gap-5">
      <div
        style={{
          backgroundImage: "url('/images/Mask group.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-3 md:p-10 pb-16 mb-10 flex gap-8 flex-col items-center text-center"
      >
        <h2 className="text-4xl pt-5 pb-2 md:text-5xl font-semibold text-[var(--greencal-primary)]">
          Our Objectives
        </h2>
        <div className="w-16 h-1 bg-[var(--greencal-primary)]"></div>
        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-full lg:w-[75%] xl:w-[65%]">
          <div className="flex-1 max-w-sm px-3 gap-5 bg-[var(--greencal-primary)] py-8 rounded-2xl flex flex-col items-center">
            <div className="w-20 text-[var(--greencal-main)] flex items-center justify-center h-20 rounded-full bg-[var(--greencal-secondary)]">
              <Icon name="bx-group" size="45px" />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Empowering Communities
            </h2>
            <p className="text-white">
              Providing a helping hand in various areas including education,
              medical assistance and community support.
            </p>
          </div>
          <div className="flex-1 max-w-sm px-3 gap-5 bg-[var(--greencal-primary)] py-8 rounded-2xl flex flex-col items-center">
            <div className="w-20 text-[var(--greencal-main)] flex items-center justify-center h-20 rounded-full bg-[var(--greencal-secondary)]">
              <Icon name="bx-world" size="45px" />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Outreach Programmes
            </h2>
            <p className="text-white">
              Extending a helping hand to our local communities through
              impactful outreach initiatives.
            </p>
          </div>
          <div className="flex-1 max-w-sm px-3 gap-5 bg-[var(--greencal-primary)] py-8 rounded-2xl flex flex-col items-center">
            <div className="w-20 text-[var(--greencal-main)] flex items-center justify-center h-20 rounded-full bg-[var(--greencal-secondary)]">
              <Icon name="bxs-dollar-circle" size="45px" />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Grants and Scholarships
            </h2>
            <p className="text-white">
              Fueling dreams with opportunities through grants and scholarships
              for aspiring minds.
            </p>
          </div>
        </div>
      </div>
      <div className="p-12 lg:flex pb-80 hidden mt-10 gap-3 flex-col items-center text-center">
        <h2 className="text-4xl text-center pt-5 pb-8 md:text-5xl font-semibold text-[var(--greencal-main)]">
          2025 Roadmap
        </h2>
        <div className="w-16 h-1 bg-[var(--greencal-primary)]"></div>
        <div className="w-full mt-10 mx-auto rounded-full h-3 bg-[#F5F5F5] relative">
          <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center bg-[#e2efcf59] left-40 w-8 h-8 rounded-full">
            <div className="w-5 h-5 rounded-full  animate-pulse bg-[var(--greencal-primary)]"></div>
            <div className="absolute whitespace-nowrap -bottom-40 p-5 text-center flex flex-col gap-3">
              <h4 className="text-xl font-bold">Hospital Bills Clearance</h4>
              <span>February 14, 2025 at 12 PM</span>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center bg-[#e2efcf59] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full">
            <div className="w-5 h-5 rounded-full  animate-pulse bg-[var(--greencal-primary)]"></div>
            <div className="absolute whitespace-nowrap -bottom-40 p-5 text-center flex flex-col gap-3">
              <h4 className="text-xl font-bold">Community Outreach</h4>
              <span>September 03, 2025 at 2 PM</span>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center bg-[#e2efcf59] right-40 w-8 h-8 rounded-full">
            <div className="w-5 h-5 rounded-full  animate-pulse bg-[var(--greencal-primary)]"></div>
            <div className="absolute whitespace-nowrap -bottom-40 p-5 text-center flex flex-col gap-3">
              <h4 className="text-xl font-bold">End of Year Festivities</h4>
              <span>December 25, 2025 at 1 PM</span>
            </div>
          </div>
          <div className="w-[65%] h-full rounded-full bg-[var(--greencal-main)]"></div>
        </div>
      </div>
      <div className="flex w-full flex-wrap mx-auto flex-col md:hidden gap-0">
        <h2 className="text-4xl text-center pb-8 md:text-5xl font-semibold text-[var(--greencal-main)]">
          2025 Roadmap
        </h2>
        <div className="w-16 mx-auto my-0 h-1 bg-[var(--greencal-primary)]"></div>
        <div className="h-[400px] my-10 block md:hidden relative ml-6 w-2 rounded-full bg-[#F5F5F5]">
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#e2efcf59] top-10 w-8 h-8 rounded-full">
            <div className="w-5 h-5 animate-pulse rounded-full bg-[var(--greencal-primary)]"></div>
            <div className="absolute w-full whitespace-nowrap -top-16 -right-16 p-5 text-center flex flex-col gap-3">
              <h4 className="text-lg font-bold">Hospital Bill Clearance</h4>
              <span>February 14, 2025 at 12 PM</span>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center -translate-y-1/2 justify-center bg-[#e2efcf59] top-1/2 w-8 h-8 rounded-full">
            <div className="w-5 h-5 animate-pulse rounded-full bg-[var(--greencal-primary)]"></div>
            <div className="absolute w-full whitespace-nowrap -top-16 -right-16 p-5 text-center flex flex-col gap-3">
              <h4 className="text-lg font-bold">Community Outreach</h4>
              <span>September 03, 2025 at 1 PM</span>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#e2efcf59] bottom-10 w-8 h-8 rounded-full">
            <div className="w-5 h-5 animate-pulse rounded-full bg-[var(--greencal-primary)]"></div>
            <div className="absolute w-full whitespace-nowrap -top-16 -right-16 p-5 text-center flex flex-col gap-3">
              <h4 className="text-lg font-bold">End of Year Festivities</h4>
              <span>December 25, 2025 at 1 PM</span>
            </div>
          </div>
          <div className="w-full h-[65%] rounded-full bg-[var(--greencal-main)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
