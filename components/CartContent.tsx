"use client"
import { useCartContext } from "@/context/CartContext";
import CoffeeDetails from "./CoffeeDetails"
import TotalDetails from "./TotalDetails";

const CartContent = () => {

    const { cart, setCart, shipment, setShipment } = useCartContext();

    return (
        <div className="p-4 lg:p-10 space-y-6">
            <h1 className="text-center text-subtitle text-custom-green">Cesta {cart.length ? `(${cart.reduce((acc, curr) => acc + curr.quantity, 0)})` : ""}</h1>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
                <div className="w-full lg:w-2/3 space-y-6">
                    <div className="flex flex-col justify-start items-start gap-6">
                        <p className="text-small-subtitle">Productos</p>
                        {
                            cart.length ? 
                            cart.map((coffee, i) => {
                                return (
                                    <>
                                        <CoffeeDetails key={coffee._id} variant="regular" coffee={coffee} cart={cart} setCart={setCart} />
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
                    <div className="w-full flex flex-col justify-start items-start gap-6">
                        <p className="text-small-subtitle">Seleccionar envío</p>
                        <div className="w-full flex justify-between items-center gap-6">
                            <input type="radio" name="shipment" onChange={() => setShipment(0)} value="0" checked={shipment === 0} />
                            <div className="grow">
                                <p className="text-custom-bold">Envío 5-7 días</p>
                                <p>Opción estándar sin seguimiento</p>
                            </div>
                            <span className="text-small-subtitle">GRATIS</span>
                        </div>
                        <div className="w-full flex justify-between items-center gap-6">
                            <input type="radio" name="shipment" onChange={() => setShipment(9)} value="9" checked={shipment === 9} />
                            <div className="grow">
                                <p className="text-custom-bold">Envío urgente 24h </p>
                                <p>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
                            </div>
                            <span className="min-w-fit text-small-subtitle">9.00 €</span>
                        </div>
                    </div>
                </div>

                <TotalDetails cart={cart} shipment={shipment} />
            </div>
        </div>
    )
}

export default CartContent