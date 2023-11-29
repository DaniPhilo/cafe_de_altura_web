"use client"

import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import Logo from "@/assets/Logo.svg"
import Phone from "@/assets/Phone.svg"
import CartIcon from "@/assets/CartIcon.svg"
import HamburgerBtn from "@/assets/HamburgerBtn.svg"
import { useState } from "react"
import NavLink from "./NavLink"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header className="fixed top-0 left-0 z-20 w-full flex justify-start items-center p-3 bg-custom-black text-custom-white lg:justify-center lg:gap-14">
            <div className="relatice z-20 flex justify-center items-center gap-2">
                <h1 className="text-xl lg:text-2xl">cafedealtura.com</h1>
                <Image
                    src={Logo}
                    alt=""
                    className="w-[15px] lg:w-[20px]"
                />
            </div>

            <div className={`fixed top-0 right-0 z-10 w-[80%] h-screen flex flex-col justify-start items-start pt-20 px-4 gap-10 translate-x-full ${menuOpen ? "translate-x-[1005]" : "translate-x-0"} duration-200 lg:static lg:w-auto lg:translate-x-0 lg:w-full lg:h-auto lg:flex-row lg:justify-center lg:items-center lg:p-0 bg-custom-black lg:bg-transparent`}>
                <nav>
                    <ul className="flex flex-col justify-start items-start gap-4 lg:flex-row">
                        <NavLink link="/tienda" text="Tienda" />
                        <NavLink link="" text="Suscripción" />
                        <NavLink link="" text="Para empresas" />
                        <NavLink link="" text="Sobre nosotros" />
                        <NavLink link="" text="Contacto" />
                    </ul>
                </nav>
                <div className="flex flex-col justify-center items-start gap-2 lg:flex-row lg:items-center lg:gap-0">
                    <Button variant="icon" link="" text="+34 919 49 05 18" icon={Phone} className="pl-0 lg:pl-6" />
                    <Button variant="regular" link="" text="Iniciar sesión" className="bg-custom-grey text-custom-white" />
                </div>
            </div>

            <div className="absolute top-3 right-3 z-20 flex justify-center items-center gap-4 lg:static">
                <Link href={"/tienda"} className="">
                    <Image
                        src={CartIcon}
                        alt=""
                        width={24}
                        height={24}
                        className="w-[25px] h-6"
                    />
                </Link>
                <Image
                    src={HamburgerBtn}
                    alt=""
                    className="lg:hidden"
                    onClick={() => setMenuOpen(prev => !prev)}
                />
            </div>
        </header>
    )
}

export default Navbar