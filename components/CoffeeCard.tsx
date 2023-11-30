"use client"

import Image from "next/image"
import Coffee from "@/interfaces/Coffee"
import CartCoffee from "@/interfaces/CartCoffee"
import { useEffect, useState } from "react"

interface CoffeeCardProps {
    coffee: Coffee,
    cart: CartCoffee[],
    setCart: React.Dispatch<React.SetStateAction<CartCoffee[]>>
}

const CoffeeCard = ({ coffee, cart, setCart }: CoffeeCardProps) => {

    const [quantity, setQuantity] = useState<number>(0);

    const addCoffee = () => {
        const coffeeIndex = cart.findIndex(cartCoffee => cartCoffee._id === coffee._id);
        if (coffeeIndex >= 0) {
            const newCart = [...cart.slice(0, coffeeIndex), {...cart[coffeeIndex], quantity: cart[coffeeIndex].quantity + 1, ...cart.slice(coffeeIndex + 1) }]
            setCart(newCart);
        } else {
            setCart(prev => [...prev, {...coffee, quantity: 1}])
        }
    }

    useEffect(() => {
        const currentCoffee = cart.find(cartCoffee => cartCoffee._id === coffee._id);
        if (currentCoffee){
            setQuantity(currentCoffee.quantity);
        }        
    }, [cart]);

    return (
        <div className={`2xl:min-w-[282px] flex flex-col justify-center items-center gap-6 p-6 border border-taupe rounded ${coffee.available && "hover:bg-off-white"}`}>
            <Image
                src={coffee.img_url}
                alt=""
                width={219}
                height={219}
                className={coffee.available ? "" : "opacity-30"}
            />
            <p className="text-custom-bold">{coffee.brand}</p>
            <span>{coffee.price.toFixed(2)} €</span>
            <button
                className={`p-2 rounded cursor-pointertext-custom-bold text-custom-white ${coffee.available ? "bg-custom-green" : "bg-taupe cursor-default"}`}
                onClick={addCoffee}
            >
                {coffee.available ? `Añadir${quantity ? ` (${quantity})` : ""}` : "Agotado"}
            </button>
        </div>
    )
}

export default CoffeeCard