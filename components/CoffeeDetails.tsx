import CartCoffee from "@/interfaces/CartCoffee"
import Minus from "@/assets/Minus.svg"
import Plus from "@/assets/Plus.svg"
import Image from "next/image"

interface CoffeeDetailsProps {
    variant: "short" | "regular",
    coffee: CartCoffee,
    cart: CartCoffee[],
    setCart: React.Dispatch<React.SetStateAction<CartCoffee[]>>
}

const CoffeeDetails = ({ variant, coffee, cart, setCart }: CoffeeDetailsProps) => {

    const addCoffee = () => {
        const coffeeIndex = cart.findIndex(cartCoffee => cartCoffee._id === coffee._id);
        console.log(cart.slice(coffeeIndex + 1));
        const newCart = [...cart.slice(0, coffeeIndex), { ...cart[coffeeIndex], quantity: cart[coffeeIndex].quantity + 1 }, ...cart.slice(coffeeIndex + 1)];
        console.log(newCart);

        setCart(newCart);
    }

    const substractCoffee = () => {
        const coffeeIndex = cart.findIndex(cartCoffee => cartCoffee._id === coffee._id);
        if (coffee.quantity <= 1) {
            const newCart = [...cart.slice(0, coffeeIndex), ...cart.slice(coffeeIndex + 1)]
            setCart(newCart);
        } else {
            const newCart = [...cart.slice(0, coffeeIndex), { ...cart[coffeeIndex], quantity: cart[coffeeIndex].quantity - 1 }, ...cart.slice(coffeeIndex + 1)]
            setCart(newCart);
        }
    }

    return (
        <div className="w-full flex justify-between items-center gap-2 lg:gap-6">
            {
                variant === "regular" &&
                <div className="flex justify-center items-center gap-2">
                    <button onClick={substractCoffee}>
                        <Image
                            src={Minus}
                            alt=""
                            className="w-[24px]"
                        />
                    </button>
                    <div className="w-[24px] h-[24px] flex justify-center items-center text-custom-green bg-custom-green-light rounded-full">
                        <span>{coffee.quantity}</span>
                    </div>
                    <button onClick={addCoffee}>
                        <Image
                            src={Plus}
                            alt=""
                            className="w-[24px]"
                        />
                    </button>
                </div>
            }

            <div className="grow flex justify-start items-center gap-6">
                <Image
                    src={coffee.img_url}
                    alt=""
                    width={20}
                    height={55}
                    className="w-auto h-[25px] lg:h-[55px]"
                />
                <div className="space-y-1">
                    <p className="text-custom-bold">{coffee.brand}</p>
                    <p>Paquete de café, 250 gr.</p>
                </div>
            </div>

            <span className="text-small-subtitle min-w-fit">{(coffee.price * coffee.quantity).toFixed(2)} €</span>
        </div>
    )
}
export default CoffeeDetails