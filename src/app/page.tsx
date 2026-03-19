import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { ServiceDetails } from "@/components/sections/service-details";
import { Industries } from "@/components/sections/industries";
import { Coverage } from "@/components/sections/coverage";
import { Team } from "@/components/sections/team";

import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceDetails />
        <Industries />
        <Coverage />
        <Team />

      </main>
      <Footer />
    </>
  );
}
