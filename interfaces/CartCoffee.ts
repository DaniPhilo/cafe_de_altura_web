import Coffee from "./Coffee";

interface CoffeeDetails {
    quantity: number
}

export default interface CartCoffee extends Coffee, CoffeeDetails {}