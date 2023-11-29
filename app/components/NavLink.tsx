import Link from "next/link"

interface NavLinkProps {
    link: string,
    text: string
}

const NavLink = ({ link, text }: NavLinkProps) => {
    return (
        <li className="p-2 rounded hover:bg-custom-grey">
            <Link href={link}>{text}</Link>
        </li>
    )
}

export default NavLink