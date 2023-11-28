"use client"

import Chevron from "@/assets/Chevron.svg"
import Image from "next/image"
import { useState } from "react"

interface QuestionProps {
    title: string,
    text: string
}

const Question = ({ title, text }: QuestionProps) => {

    const [openQuestion, setOpenQuestion] = useState<boolean>(false);

    return (
        <div className="w-[300px] md:w-[668px] p-6 space-y-4 bg-custom-white rounded" onClick={() => setOpenQuestion(prev => !prev)}>
            <div className="flex justify-between items-center">
                <h3 className="text-small-subtitle">{title}</h3>
                <Image
                    src={Chevron}
                    alt=""
                    className={openQuestion ? "rotate-180" : "rotate-0"}
                />
            </div>
            <div className={`space-y-4 ${openQuestion ? "block" : "hidden"}`}>
                <div className="w-full h-[1px] bg-taupe"></div>
                <p className="text-xs">{text}</p>
            </div>
        </div>
    )
}

export default Question