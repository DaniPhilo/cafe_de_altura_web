"use client"
import CartCoffee from "@/interfaces/CartCoffee";
import { createContext, useContext, useState } from "react"

interface CartContextInterface {
    cart: CartCoffee[],
    setCart: React.Dispatch<React.SetStateAction<CartCoffee[]>>,
    shipment: number,
    setShipment: React.Dispatch<React.SetStateAction<number>>
}

export const useCartContext = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error(
            "cartContext has to be used within <CartContext.Provider>"
        );
    }

    return cartContext;
}

export const CartContext = createContext<CartContextInterface | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [cart, setCart] = useState<CartCoffee[]>([]);
    const [shipment, setShipment] = useState<number>(0);

    return (
        <CartContext.Provider value={{ cart, setCart, shipment, setShipment }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider