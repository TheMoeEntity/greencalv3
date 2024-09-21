import About from "@/components/sections/Home/About";
import FundRaisers from "@/components/sections/Home/FundRaisers";
import Testimonials from "@/components/sections/Home/Testimonials";
import Hero from "@/components/shared/Hero";
import { getDocuments } from "@/helpers/lib/firebase";
import { IPost } from "@/types";

export default async function Home() {
  const events = await getDocuments();
  const allEvents = events as IPost[]
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <FundRaisers events={allEvents} />
      <Testimonials />
    </main>
  );
}
