import { useContext } from 'react';
import { QuizContext } from '../context/Quiz';

import Pergunta from '../img/pergunta.jpg';

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={()=> dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
        <img src={Pergunta} alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome