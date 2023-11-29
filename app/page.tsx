import Conditions from "./components/Conditions";
import Footer from "./components/Footer";
import FrecuentQuestions from "./components/FrecuentQuestions";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="w-full lg:max-w-[1280px] pt-4 lg:pt-16 mx-auto text-regular overflow-x-hidden">
      <Navbar />
      <Hero />
      <Conditions />
      <Products display="short" />
      <FrecuentQuestions />
      <Location />
      <Footer variant="regular" />
    </main>
  )
}
