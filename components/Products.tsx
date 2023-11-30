"use client"

import { useEffect, useState } from "react"
import Coffee from "@/interfaces/Coffee";
import CoffeeCard from "./CoffeeCard";
import ArrowLink from "./ArrowLink";
import { useCartContext } from "@/context/CartContext";

const Products = ({ variant }: { variant: "short" | "full" }) => {

    const [coffees, setCoffees] = useState<Coffee[]>([]);

    const { cart, setCart } = useCartContext();

    const getCoffees = async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
        const data = await response.json();

        return data.products as Coffee[]
    }

    useEffect(() => {
        getCoffees()
            .then(coffees => setCoffees(coffees))
    }, []);

    return (
        <div className="px-4 py-10 lg:px-10 flex flex-col gap-10">
            <h2 className="text-subtitle text-custom-green text-center">{variant === "short" ? "Novedades" : "Últimos orígenes"}</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {
                    coffees.slice(0, variant === "short" ? 4 : coffees.length).map(coffee => {
                        return (
                            <CoffeeCard
                                key={coffee._id}
                                coffee={coffee}
                                cart={cart}
                                setCart={setCart}
                            />
                        )
                    })
                }
            </div>
            <ArrowLink color="black" text="Ver todo" link="" />
        </div>
    )
}

export default Products