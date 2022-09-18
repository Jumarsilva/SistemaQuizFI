import { useContext } from "react"
import { QuizContext } from "../context/Quiz"

import './Option.css'

const Option = ({option, selectOption, answer}) => {
    const [quizStage, dispatch] = useContext(QuizContext);



  return (
    <div className={
        `option ${quizStage.answerSelected && option ===answer ? "correct" : ""}
                ${quizStage.answerSelected && option !==answer ? "wrong" : ""}` 
    }  onClick={()=> selectOption(option)}>
        <p>{option}</p>
    </div>
  )
}

export default Option