import CartCoffee from "./CartCoffee";

export default interface Cart {
    coffees: CartCoffee[],
    shipment: number
}