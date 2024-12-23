import About from "@/components/sections/Home/About";
import FundRaisers from "@/components/sections/Home/FundRaisers";
import Hero_V2 from "@/components/sections/Home/Hero";
import Testimonials from "@/components/sections/Home/Testimonials";
// import Hero from "@/components/shared/Hero";
import { getDocuments } from "@/helpers/lib/firebase";
import { IPost } from "@/types";

export default async function Home() {
  // const events = await getDocuments();
  // const allEvents = events as IPost[]
  return (
    <main className="min-h-screen">
      <Hero_V2 />
      {/* <About />
      <FundRaisers events={allEvents} /> */}
      {/* <Testimonials /> */}
    </main>
  );
}
