import Image from "next/image"
import Button from "./Button"
import HeroImg from "@/assets/hero-img.png"

const Hero = () => {
  return (
    <div className="w-full py-12 px-4 md:px-10 lg:flex justify-center items-center gap-6">
      <div className="w-full max-w-[600px] lg:w-1/2 grid gap-4">
        <p className="text-small-subtitle text-custom-green">De la planta a tu taza</p>
        <h1 className="text-title">El mejor café del mundo, ahora en tu casa</h1>
        <p>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
        <div className="w-full flex flex-col items-start gap-4 sm:flex-row">
          <Button variant="regular" link="" text="Descubrir orígenes" className="text-custom-white bg-custom-black" />
          <Button variant="regular" link="" text="Comprar café" className="text-custom-white bg-custom-green" />
        </div>
      </div>
      <Image
        src={HeroImg}
        alt=""
        className="hidden lg:block w-1/2"
      />
    </div>
  )
}

export default Hero