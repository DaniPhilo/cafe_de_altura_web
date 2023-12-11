import Image from "next/image"

interface ConditionCardProps {
    icon: string,
    title: string,
    text: string,
    className?: string
}

const ConditionCard = ({ icon, title, text, className }: ConditionCardProps) => {
    return (
        <div className={`max-w-[290px] md:max-w-[316px] h-[250px] md:h-[232px] p-6 flex flex-col justify-center items-center gap-4 bg-custom-white rounded-lg ${className ? className : ""}`}>
            <div className="p-3 flex justify-center items-center bg-custom-green rounded-xl">
                <Image
                    src={icon}
                    alt=""
                    width={40}
                    height={40}
                />
            </div>
            <p className="text-center text-small-subtitle">{title}</p>
            <p className="text-center">{text}</p>
        </div>
    )
}

export default ConditionCard