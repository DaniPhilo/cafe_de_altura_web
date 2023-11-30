import CartCoffee from "@/interfaces/CartCoffee"
import Button from "./Button"

interface TotalDetailsProps {
    cart: CartCoffee[],
    shipment: number
}

const TotalDetails = ({ cart, shipment }: TotalDetailsProps) => {
    return (
        <div className="w-full lg:w-[400px] flex flex-col justify-start items-start gap-4 p-6 bg-off-white">
            <p className="text-small-subtitle">Total del carrito</p>
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
                    <span className="text-xs">Incluye {((cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) + shipment) * 0.21).toFixed(2) }€ de IVA</span>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <Button link="" text="Ir a checkout" variant="regular" className="bg-custom-green" />
                <Button link="/tienda" text="Seguir comprando" variant="regular" className="text-[#2A5B45]" />
            </div>
        </div>
    )
}

export default TotalDetails