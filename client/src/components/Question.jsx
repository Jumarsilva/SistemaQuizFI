import { useContext } from "react";
import { QuizContext } from "../context/Quiz";
import Option from "./Option";


//Estilo
import './Question.css'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
  
    const onSelectOption = (option)=>{
        dispatch({
            type:"CHECK_ANSWER",
            payload: {answer: currentQuestion.answer, option}
        })
    };

    return (
        <div className="box">
            <div className="title">
                Quiz Fi Group App
            </div>
            <div className="header">
                <div className="scoreBox">Score : {quizState.score}</div>
                <p className="currentQuestions">
                    Pergunta de {quizState.currentQuestion + 1} de {quizState.questions.length}
                </p>
            </div>

            <div id="question">
           
                <h2>{currentQuestion.question}</h2>
                <div id="options-container">
                    {currentQuestion.options.map((option) => (
                        <Option 
                        option = {option} 
                        key={option} 
                        answer = {currentQuestion.answer} 
                        selectOption = {() => onSelectOption(option)}
                        />
                    ))}
                </div>
                {quizState.answerSelected && (
                    <button onClick={()=> dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
                )}
            </div>
        </div>


  )
}

export default Question