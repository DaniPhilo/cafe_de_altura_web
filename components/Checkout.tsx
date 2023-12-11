"use client"

import { useCartContext } from "@/context/CartContext";
import TotalDetails from "./TotalDetails"

const Checkout = () => {

    const { cart, setCart, shipment, setShipment } = useCartContext();

    const inputStyles = "p-2 border border-input-border rounded"

    return (
        <div className="w-full py-10 space-y-6 px-4 lg:p-10">
            <h2 className="text-center text-subtitle text-custom-green">Checkout</h2>
            <div className="lg:flex lg:justify-between lg:items-start lg:gap-6">
                <form className="max-w-[550px] space-y-6 lg:w-2/3">
                    <p className="text-small-subtitle text-cusotm-black">Seleccionar método de pago</p>
                    <div className="flex items-center gap-4">
                        <input type="radio" name="payment" value={"card"} />
                        <label htmlFor="">
                            <p className="text-custom-black text-custom-bold">Tarjeta de débito</p>
                            <p>Opción estándar sin seguimiento</p>
                        </label>
                    </div>
                    <div className="grid space-y-2">
                        <div className="grid gap-y-2">
                            <label htmlFor="owner">Titular</label>
                            <input type="text" name="owner" placeholder="Nombre del titular" className={inputStyles} />
                        </div>
                        <div className="grid gap-y-2">
                            <label htmlFor="card_number">Número de tarjeta</label>
                            <input type="text" name="card_number" placeholder="1234 1234 1234 1234" className={inputStyles} />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-2 lg:gap-x-4">
                            <div className="grid gap-y-2">
                                <label htmlFor="card_expiration">Fecha de caducidad</label>
                                <input type="text" name="card_expiration" placeholder="MM/YY" className={inputStyles} />
                            </div>
                            <div className="grid gap-y-2">
                                <label htmlFor="cvc">CVC</label>
                                <input type="text" name="cvc" placeholder="123" className={inputStyles} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-taupe"></div>

                    <div className="flex items-center gap-4">
                        <input type="radio" name="payment" value={"transfer"} />
                        <label htmlFor="">
                            <p className="text-custom-black text-custom-bold">Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
                            <p>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
                        </label>
                    </div>

                    <div className="w-full h-px bg-taupe"></div>

                    <div className="flex items-center gap-4">
                        <input type="radio" name="payment" value={"bizum"} />
                        <label htmlFor="" className="text-custom-black text-custom-bold">Bizum</label>
                    </div>

                    <p className="text-small-subtitle text-cusotm-black">Dirección de envío</p>

                    <div className="grid space-y-2">
                        <div className="grid gap-y-2">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" className={inputStyles} />
                        </div>
                        <div className="grid gap-y-2">
                            <label htmlFor="surname">Apellidos</label>
                            <input type="text" name="surname" className={inputStyles} />
                        </div>
                        <div className="grid gap-y-2">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="text" name="phone" placeholder="655 432 321" className={inputStyles} />
                        </div>
                        <div className="grid gap-y-2">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" className={inputStyles} />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-2 lg:gap-x-4">
                            <div className="grid gap-y-2">
                                <label htmlFor="city">Población</label>
                                <input type="text" name="city" className={inputStyles} />
                            </div>
                            <div className="grid gap-y-2">
                                <label htmlFor="postal_code">CP</label>
                                <input type="text" name="postal_code" className={inputStyles} />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-4 gap-2 lg:gap-x-4">
                            <div className="grid gap-y-2">
                                <label htmlFor="street">Calle</label>
                                <input type="text" name="street" className={`lg:max-w-[125px] ${inputStyles}`} />
                            </div>
                            <div className="grid gap-y-2">
                                <label htmlFor="street_number">Nº</label>
                                <input type="text" name="street_number" className={`lg:max-w-[125px] ${inputStyles}`} />
                            </div>
                            <div className="grid gap-y-2">
                                <label htmlFor="floor">Piso</label>
                                <input type="text" name="floor" className={`lg:max-w-[125px] ${inputStyles}`} />
                            </div>
                            <div className="grid gap-y-2">
                                <label htmlFor="door">Puerta</label>
                                <input type="text" name="door" className={`lg:max-w-[125px] ${inputStyles}`} />
                            </div>
                        </div>
                    </div>
                </form>
                <TotalDetails variant="checkout" cart={cart} shipment={shipment} />
            </div>

        </div>
    )
}

export default Checkout