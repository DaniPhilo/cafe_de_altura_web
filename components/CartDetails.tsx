import CartCoffee from "@/interfaces/CartCoffee"
import CartCoffeeDisplay from "./CoffeeDetails"

interface CartDetailsProps {
    coffees: CartCoffee[]
}

const CartDetails = ({ coffees }: CartDetailsProps) => {
    return (
        <div>
            {
                coffees.map(coffee => {
                    return (
                        <CartCoffeeDisplay variant="regular" coffee={coffee} />
                    )
                })
            }
        </div>
    )
}

export default CartDetails