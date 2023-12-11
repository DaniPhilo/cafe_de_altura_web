import Checkout from "@/components/Checkout"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import TotalDetails from "@/components/TotalDetails"

const CheckoutPage = () => {
    return (
        <div>
            <Navbar />
            <Checkout />
            <Footer variant="short" />
        </div>
    )
}

export default CheckoutPage