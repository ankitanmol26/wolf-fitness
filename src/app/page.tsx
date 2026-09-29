import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Programs from "@/components/Programs";
import Membership from "@/components/Membership";
import Transformations from "@/components/Transformations";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Facilities />
      <Programs />
      <Membership />
      <Transformations />
      <Gallery />
      <Testimonials />
      <Location />
      <FinalCTA />
    </main>
  );
}
