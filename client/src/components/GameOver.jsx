import { useContext } from "react";

import { QuizContext } from "../context/Quiz"

import "./GameOver.css"
import logo from "../img/logofi.png"


const GameOver = () => {
    const [quisStage, dispatch] = useContext(QuizContext);
    return (
        <div className="box">
            <div className="title">
                Quiz Fi Group App - Resultados
            </div>
            <div className="box-container">
                <div id="gameover">
                                <label htmlFor="">Perguntas :</label>
                                <span id="totalQuestions">{quisStage.questions.length}</span>
                                <label htmlFor="">Acertos :</label>
                                <span id="correctsAnswers">{quisStage.score}</span>
                                <label htmlFor="">Erros : </label>
                                <span id="wrongsAnswers">{quisStage.questions.length - quisStage.score}</span>

                </div>
                <div>
                    <img src={logo} alt="Fim do Jogo" />
                </div>

            </div>
           
           

        <div className="return">
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
        </div>
       
        )
}

export default GameOver