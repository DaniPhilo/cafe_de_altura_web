import Conditions from "@/components/Conditions";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FrecuentQuestions from "@/components/FrecuentQuestions";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Conditions />
      <Products variant="short" />
      <FrecuentQuestions />
      <Location />
      <ContactSection />
      <Footer variant="regular" />
    </>
  )
}
