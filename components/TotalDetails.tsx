"use client"
import CartCoffee from "@/interfaces/CartCoffee"
import Button from "./Button"
import { Vazirmatn } from "next/font/google"

interface TotalDetailsProps {
    variant: "cart" | "checkout" | "success",
    cart: CartCoffee[],
    shipment: number
}

const TotalDetails = ({ variant, cart, shipment }: TotalDetailsProps) => {
    return (
        <div className={`w-full flex flex-col justify-start items-start gap-4 p-6 bg-off-white ${variant !== "success" && "lg:w-[400px]"}`}>
            {variant !== "success" && <p className="text-small-subtitle">Total del carrito</p>}
            <div className="w-full h-px bg-taupe"></div>
            <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="w-full flex justify-between items-start">
                    <p>SUBTOTAL</p>
                    <span className="text-custom-bold">{cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)} €</span>
                </div>
                <div className="w-full flex justify-between items-start">
                    <p>ENVÍO</p>
                    <span className="text-custom-bold">{shipment.toFixed(2)} €</span>
                </div>
            </div>
            <div className="w-full h-px bg-taupe"></div>
            <div className="w-full flex justify-between items-start">
                <p className="text-custom-bold">TOTAL</p>
                <div className="flex flex-col items-end gap-2">
                    <span className="text-custom-bold">{(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) + shipment).toFixed(2)} €</span>
                    <span className="text-xs">Incluye {((cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) + shipment) * 0.21).toFixed(2)}€ de IVA</span>
                </div>
            </div>
            <div className="w-full flex justify-center items-center gap-4">
                {
                    variant === "cart" ?
                        <>
                            <Button link="/checkout" text="Ir a checkout" variant="regular" className="text-custom-white bg-custom-green" />
                            <Button link="/tienda" text="Seguir comprando" variant="regular" className="text-custom-green" />
                        </>
                        :
                        variant === "checkout" ?
                            <Button link="/success" text="Pagar y realizar pedido" variant="regular" className="text-custom-white bg-custom-green" />
                            :
                            <Button link="/tienda" text="Volver a la tienda" variant="regular" className="text-custom-white bg-custom-green" />
                }
            </div>
        </div>
    )
}

export default TotalDetails