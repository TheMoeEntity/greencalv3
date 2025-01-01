import About from "@/components/sections/Home/About";
import All_Events from "@/components/sections/Home/All_Events";
import FAQ from "@/components/sections/Home/FAQ";
import FundRaisers from "@/components/sections/Home/FundRaisers";
import Hero_V2 from "@/components/sections/Home/Hero";
import Objectives from "@/components/sections/Home/Objectives";
import Testimonials from "@/components/sections/Home/Testimonials";
// import Hero from "@/components/shared/Hero";
import { getDocuments } from "@/helpers/lib/firebase";
import { IPost } from "@/types";

export default async function Home() {
  const events = await getDocuments();
  const allEvents = events as IPost[];
  return (
    <main className="min-h-screen">
      <Hero_V2 />
      <Objectives />
      <All_Events events={allEvents} />
      <FAQ />
      {/* <About />
      <FundRaisers events={allEvents} /> */}
      {/* <Testimonials /> */}
    </main>
  );
}
