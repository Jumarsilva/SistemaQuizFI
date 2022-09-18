import { useContext } from "react";

import { QuizContext } from "../context/Quiz"

import "./GameOver.css"
import imagem from "../img/pergunta.jpg"


const GameOver = () => {
    const [quisStage, dispatch] = useContext(QuizContext);
    return (
        <div id="gameover">
            <h2>Fim de Jogo</h2>
            <p>Pontuação: {quisStage.score}</p>
            <p>Você acertou {quisStage.score} de {quisStage.questions.length} perguntas.</p>
            <img src={imagem} alt="Fim do Jogo" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
        )
}

export default GameOver