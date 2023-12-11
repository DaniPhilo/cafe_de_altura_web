"use client"

import Button from "./Button"

const ContactForm = () => {
    return (
        <div className="w-full py-10 px-4 bg-custom-white lg:p-10">
            <form className="grid space-y-6">
                <div className="grid space-y-2">
                    <label htmlFor="name">Nombre completo</label>
                    <input type="text" id="name" name="name" className="py-2 px-3 border border-input-border rounded" />
                </div>
                <div className="grid space-y-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" className="py-2 px-3 border border-input-border rounded" />
                </div>
                <div className="grid space-y-2">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" id="phone" name="phone" placeholder="688 456 159" className="py-2 px-3 border border-input-border rounded" />
                </div>

                <textarea name="message" id="message" cols={30} rows={10} placeholder="¿En qué podemos ayudarte?" className="py-2 px-3 border border-input-border rounded"></textarea>

                <div className="flex items-center gap-3">
                    <input type="checkbox" name="accept_conditions" value={"true"} defaultValue={"false"} className="w-4 h-4" />
                    <label htmlFor="accept_conditions">Acepto la <span className="text-custom-black text-custom-bold underline">Política de Privacidad</span> y los <span className="text-custom-black text-custom-bold underline">Términos y condiciones</span>.</label>
                </div>
                <div>
                    <input type="submit" value={"Enviar"} className="py-3 px-6 text-custom-white text-custom-bold bg-custom-green rounded cursor-pointer" />
                </div>
            </form>
        </div>
    )
}

export default ContactForm