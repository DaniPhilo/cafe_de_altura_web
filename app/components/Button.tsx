import Link from "next/link"

interface ButtonProps {
    variant: "regular" | "icon",
    text: string,
    link: string,
    className?: string,
    icon?: string
}

const Button = ({ variant, text, link, className = '',  icon }: ButtonProps) => {
    return (
        <Link
            href={link}
            className={`py-3 px-6 text-custom-white font-semibold rounded ${className}`}
        >
            {text}
        </Link>
    )
}

export default Button