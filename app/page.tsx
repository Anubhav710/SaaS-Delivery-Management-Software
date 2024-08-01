import About from "@/components/About";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Interface from "@/components/Interface";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Start from "@/components/Start";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=" min-h-screen">
        <div className="bg-primary-purple ">
          <Navbar />
          <Hero />

          <div className="skew-y-[-9.5deg]">
            <Services />
            <Interface />
          </div>
        </div>
        <div className="bg-[#F1F5FF]">
          <div className="skew-y-[-9.5deg]">
            <Features />
          </div>
          <Faq />
          <About />
          <Start />
          <Footer />
        </div>
      </div>
    </main>
  );
}
