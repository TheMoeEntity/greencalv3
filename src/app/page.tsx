import About from "@/components/sections/Home/About";
import FundRaisers from "@/components/sections/Home/FundRaisers";
import Testimonials from "@/components/sections/Home/Testimonials";
import Hero from "@/components/shared/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <FundRaisers />
      <Testimonials />
    </main>
  );
}
