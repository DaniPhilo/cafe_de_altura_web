"use client"

import CartContent from "@/components/CartContent"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const CartPage = () => {
    return (
        <>
            <Navbar />
            <CartContent />
            <Footer variant="short" />
        </>
    )
}

export default CartPage