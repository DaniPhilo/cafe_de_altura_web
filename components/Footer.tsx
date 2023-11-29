import Button from "./Button"
import Phone from "@/assets/Phone.svg"
import Mail from "@/assets/Mail.svg"
import NavLink from "./NavLink"

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
                        <ul>
                            <NavLink link="/tienda" text="Tienda" />
                            <NavLink link="" text="Suscripción" />
                            <NavLink link="" text="Para empresas" />
                            <NavLink link="" text="Sobre nosotros" />
                            <NavLink link="" text="Contacto" />
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <NavLink link="" text="Política de privacidad" />
                            <NavLink link="" text="Política de cookies" />
                            <NavLink link="" text="Términos y condiciones" />
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