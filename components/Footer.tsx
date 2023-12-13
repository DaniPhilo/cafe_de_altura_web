import Button from "./Button"
import Phone from "@/assets/Phone.svg"
import Mail from "@/assets/Mail.svg"
import NavLink from "./NavLink"
import Link from "next/link"

const Footer = ({ variant }: { variant: "short" | "regular" }) => {
    return (
        <footer className=" bg-custom-black text-custom-white">
            {
                variant === "regular" &&

                <div className="flex flex-col justify-start items-start gap-6 py-6 px-4 lg:flex-row lg:justify-center lg:gap-40">
                    <div>
                        <div className="space-y-4">
                            <h1 className="text-2xl">cafedealtura.com</h1>
                            <div className="space-y-4">
                                <p>Te ayudamos en</p>
                                <Button variant="icon" icon={Phone} link="" text="+34 919 49 05 18" className="bg-custom-grey" />
                                <Button variant="icon" icon={Mail} link="" text="hola@cafedealtura.com" className="bg-custom-grey" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4">
                            <Link href="/tienda">Tienda</Link>
                            <Link href="">Suscripción</Link>
                            <Link href="">Para empresas</Link>
                            <Link href="">Sobre nosotros</Link>
                            <Link href="">Contacto</Link>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4">
                            <Link href="">Política de privacidad</Link>
                            <Link href="">Política de cookies</Link>
                            <Link href="">Términos y condiciones</Link>
                        </ul>
                    </div>
                </div>
            }

            <div className="p-3 bg-[#2B2A2B] text-center">
                <p>Todos los derechos reservados - Café de Altura SL - 2022</p>
            </div>

        </footer>
    )
}

export default Footer