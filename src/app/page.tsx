import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import Stats from "@/components/home/Stats";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import Leadership from "@/components/home/Leadership";
import WhyJoin from "@/components/home/WhyJoin";
import Newsletter from "@/components/home/Newsletter";
import FocusSectors from "@/components/home/FocusSectors";
import Testimonials from "@/components/home/Testimonials";
import LatestNews from "@/components/home/LatestNews";
import Intro from "@/components/home/Intro";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Intro />
      <Stats />
      <UpcomingEvent />
      <Leadership />
      <WhyJoin />
      <Newsletter />
      <FocusSectors />
      <Testimonials />
      <LatestNews />
    </>
  );
}
