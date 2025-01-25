import All_Donations from "@/components/sections/Donations/All_Donations";
import Hero_Shared from "@/components/shared/Hero_Shared";
import React from "react";

const Donate = () => {
  return (
    <section>
      <Hero_Shared text={"Donations"} page="donate" />
      <div className="container p-3 md:p-8">
        <h2 className="text-2xl font-semibold md:text-3xl text-center">
          Supporting causes that transform communities
        </h2>
      </div>
      <All_Donations />
    </section>
  );
};

export default Donate;
