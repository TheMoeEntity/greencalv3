export const revalidate = 0;
import All_Donations from "@/components/sections/Donations/All_Donations";
import Hero_Shared from "@/components/shared/Hero_Shared";
import { getDonations } from "@/helpers/lib/firebase";
import { DonationsType } from "@/types";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Greencal Foundation - Donations",
  description:
    "Support the transformative work of Greencal Foundation by exploring our donation initiatives. Your contributions help us provide essential services in education, medical care, and community outreach.",
  keywords:
    "Greencal Foundation, donations, charity, support, fundraising, contributions",
  authors: [
    { name: "Moses Chukwudi Nwigberi", url: "https://moewebverse.vercel.app" },
  ],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Greencal Foundation",
};
const Donate = async () => {
  const dons = await getDonations();
  const allDonations = dons as DonationsType[];
  return (
    <section>
      <Hero_Shared text={"Donations"} page="donate" />
      <div className="container p-3 md:p-8">
        <h2 className="text-2xl font-semibold md:text-3xl text-center">
          Supporting causes that transform communities.
        </h2>
      </div>
      <All_Donations donations={allDonations} />
    </section>
  );
};

export default Donate;
