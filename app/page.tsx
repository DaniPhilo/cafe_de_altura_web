import Conditions from "./components/Conditions";
import FrecuentQuestions from "./components/FrecuentQuestions";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="w-full max-w-[1280px] text-regular">
      <Hero />
      <Conditions />
      <Products display="short" />
      <FrecuentQuestions />
      <Location />
    </main>
  )
}
