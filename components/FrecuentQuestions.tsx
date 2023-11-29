
import Questions from "@/helpers/Questions.json"
import Question from "./Question"
import ArrowLink from "./ArrowLink"

const FrecuentQuestions = () => {
    return (
        <div className="w-full py-12 px-4 flex flex-col justify-center items-center gap-10 bg-custom-green">
            <h2 className="text-subtitle text-custom-white">Preguntas frecuentes</h2>
            <div className="flex flex-col justify-center items-center gap-4">
               {
                Questions.map((question, i) => {
                    return <Question key={i} title={question.title} text={question.text} />
                })
            } 
            </div>
            <ArrowLink color="white" text="Resolvemos tus dudas" link="" />
        </div>
    )
}

export default FrecuentQuestions