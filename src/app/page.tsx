export const revalidate = 0;
import About from "@/components/sections/Home/About";
import All_Events from "@/components/sections/Home/All_Events";
import FAQ from "@/components/sections/Home/FAQ";
import Hero_V2 from "@/components/sections/Home/Hero";
import Objectives from "@/components/sections/Home/Objectives";
import { Helpers } from "@/helpers";
// import Hero from "@/components/shared/Hero";
import { getDocuments, getDonations } from "@/helpers/lib/firebase";
import { DonationsType, donationType, IPost } from "@/types";

export default async function Home() {
  const events = await getDocuments();
  const dons = await Helpers.getAllDonations();
  const allEvents = events as IPost[];
  const allDonations = dons as DonationsType[];
  return (
    <main className="min-h-screen">
      <Hero_V2 />
      <Objectives />
      <All_Events events={allEvents} donations={allDonations} />
      <FAQ />
      {/* <About />
      <FundRaisers events={allEvents} /> */}
      {/* <Testimonials /> */}
    </main>
  );
}
