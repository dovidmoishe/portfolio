import Image from "next/image";
import Navbar from "@/../components/Home/NavBar/Navbar";
import Hero from "@/../components/Home/Hero/Hero";
import Projects from "@/../components/Home/Projects/Projects";
import Work from "../../components/Home/Work/Work";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import CTA from "../../components/Home/CTA/CTA";
import Footer from "../../components/Home/Footer/Footer";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Projects />
    <Work />
    <Testimonials />
    <CTA />
    <Footer />
    </>
  );
}
