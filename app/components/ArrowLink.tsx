import ArrowBlack from "@/assets/ArrowBlack.svg"
import ArrowWhite from "@/assets/ArrowWhite.svg"
import Image from "next/image"
import Link from "next/link"

interface ArrowLinkProps {
    color: string,
    text: string,
    link: string
}

const ArrowLink = ({ color, text, link }: ArrowLinkProps) => {
    return (
        <Link
            href={link}
            className={`flex justify-center items-center gap-4 text-custom-bold ${color === "black" ? "text-custom-black" : "text-custom-white"}`}
        >
            {text}
            <Image
                src={color === "black" ? ArrowBlack : ArrowWhite}
                alt=""
            />
        </Link>
    )
}

export default ArrowLink