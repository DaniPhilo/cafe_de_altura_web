"use client"
import Link from "next/link"

interface NavLinkProps {
    link: string,
    text: string,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavLink = ({ link, text, setMenuOpen }: NavLinkProps) => {
    return (
        <li className="p-2 rounded hover:bg-custom-grey" onClick={() => setMenuOpen(false)}>
            <Link href={link}>{text}</Link>
        </li>
    )
}

export default NavLink