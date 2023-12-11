import PhoneGrey from "@/assets/PhoneGrey.svg"
import MailGrey from "@/assets/MailGrey.svg"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "./ContactForm"

const ContactSection = () => {
    return (
        <div className="w-full grid bg-taupe lg:grid-cols-2 lg:px-10">
            <div className="flex flex-col justify-center items-start py-10 px-4 space-y-8 text-text-grey lg:pl-0 lg:pr-8">
                <div className="space-y-3">
                    <h3 className="text-small-subtitle text-custom-black">Entra en contacto con nosotros</h3>
                    <p>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
                </div>
                <div className="space-y-6">
                    <p>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>
                    <div>
                        <p>742 Evergreen Terrace</p>
                        <p>Springfield, OR 12345</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <Image
                                src={PhoneGrey}
                                alt=""
                            />
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image
                                src={MailGrey}
                                alt=""
                            />
                            <p>support@example.com</p>
                        </div>
                    </div>
                    <p>¿Buscas un trabajo? <Link href={""} className="text-custom-bold text-custom-black underline">Ver nuestras ofertas</Link>.</p>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default ContactSection