"use client"

import { useCartContext } from "@/context/CartContext";
import CoffeeDetails from "./CoffeeDetails";
import TotalDetails from "./TotalDetails";

const SuccessContent = () => {

    const { cart, setCart, shipment, setShipment } = useCartContext();

    return (
        <div className="p-6 space-y-6">
            <div className="space-y-6">
                {
                    cart.length ?
                        cart.map((coffee, i) => {
                            return (
                                <>
                                    <CoffeeDetails key={coffee._id} variant="short" coffee={coffee} cart={cart} setCart={setCart} />
                                    {
                                        i !== cart.length - 1
                                        &&
                                        <div key={i} className="w-full h-px bg-taupe"></div>
                                    }
                                </>
                            )
                        })
                        :
                        <p>No hay productos en el carrito</p>
                }
            </div>
            <TotalDetails variant="success" cart={cart} shipment={shipment} />
        </div>
    )
}

export default SuccessContent