import Image from "next/image"
import Coffee from "@/interfaces/Coffee"
import Button from "./Button"

const CoffeeCard = ({ _id, brand, price, img_url, available }: Coffee) => {
    return (
        <div className={`2xl:min-w-[282px] flex flex-col justify-center items-center gap-6 p-6 border border-taupe rounded ${available && "hover:bg-off-white"}`}>
            <Image
                src={img_url}
                alt=""
                width={219}
                height={219}
                className={available ? "" : "opacity-30"}
            />
            <p className="text-custom-bold">{brand}</p>
            <span>{price.toFixed(2)} €</span>
            <Button variant="regular" text={available ? "Añadir" : "Agotado"} link="" className={available ? "bg-custom-green" : "bg-taupe cursor-default"} />
        </div>
    )
}

export default CoffeeCard