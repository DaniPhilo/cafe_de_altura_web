import Image from "next/image"
import Coffee from "../interfaces/Coffee"
import Button from "./Button"

const CoffeeCard = ({_id, brand, price, img_url, available}: Coffee) => {
    return (
        <div className="min-w-[282px] flex flex-col justify-center items-center gap-6 p-6 border border-taupe rounded">
            <Image
                src={img_url}
                alt=""
                width={219}
                height={219}
            />
            <p className="text-custom-bold">{brand}</p>
            <span>{price.toFixed(2)} €</span>
            <Button variant="regular" text="Añadir" link="" className="bg-custom-green" />
        </div>
    )
}

export default CoffeeCard