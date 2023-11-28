
import CoffeeShopImage from "@/assets/coffeeshop-image.png"
import ArrowLink from "./ArrowLink"
import Image from "next/image"

const Location = () => {
    return (
        <div className="w-full py-12 px-4 md:px-10 lg:flex justify-between items-center">
            <div className="w-full max-w-[457px] lg:w-1/2 grid gap-4">
                <h2 className="text-subtitle text-custom-green">Pruébalo en nuestro coffee shop</h2>
                <p>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
                <div className="flex">
                <ArrowLink color="black" text="Cómo llegar" link="" />
                </div>
            </div>
            <Image
                src={CoffeeShopImage}
                alt=""
                className="hidden lg:block w-1/2"
            />
        </div>
    )
}

export default Location