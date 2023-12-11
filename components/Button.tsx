import Image from "next/image"
import Link from "next/link"

interface ButtonProps {
    variant: "regular" | "icon",
    text: string,
    link: string,
    className?: string,
    icon?: string
}

const Button = ({ variant, text, link, className = '', icon }: ButtonProps) => {
    return (
        <Link
            href={link}
            className={`flex justify-center items-center gap-2 py-3 px-6 font-semibold rounded ${className}`}
        >
            {
                icon &&
                <Image
                    src={icon}
                    alt=""
                />
            }
            {text}
        </Link>
    )
}

export default Button