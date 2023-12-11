import Check from "@/assets/Check.svg"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SuccessContent from "@/components/SuccessContent"
import Image from "next/image"

const SuccessPage = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full py-10 px-4 lg:p-10 space-y-6">
                <div className="max-w-[500px] flex flex-col justify-center items-center gap-6 mx-auto">
                    <div className="w-fit p-3 flex justify-center items-center bg-custom-green rounded-xl">
                        <Image
                            src={Check}
                            alt=""
                            width={40}
                            height={40}
                        />
                    </div>
                    <h2 className="text-custom-green text-subtitle text-center">El pedido ha sido realizado con éxito</h2>
                    <p className="text-center">El pedido #12387 se encuentra en preparación. Lo recibirás dentro de las fechas acordadas en tu envío. Hemos enviado un ticket a tu correo electrónico.</p>
                </div>
                <div className="bg-off-white">
                    <SuccessContent />
                </div>
            </div>
            <Footer variant="short" />
        </div>

    )
}

export default SuccessPage