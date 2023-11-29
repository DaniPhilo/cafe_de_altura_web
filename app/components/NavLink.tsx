import Link from "next/link"

interface NavLinkProps {
    link: string,
    text: string
}

const NavLink = ({ link, text }: NavLinkProps) => {
    return (
        <li className="p-2">
            <Link href={link}>{text}</Link>
        </li>
    )
}

export default NavLink