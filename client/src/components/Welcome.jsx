import { useContext } from 'react';
import { QuizContext } from '../context/Quiz';

import logo from '../img/logofi.png';

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id='welcome'>
      
      <div className="leftSide">
        <img src={logo} alt="Inicio do quiz" className="title"/>
      </div>

      <div className="rightSide">
        <h1>Seja Bem-Vindo</h1>
        <h2>Regras: </h2>
        <ul>
          <li>Serão 05 questões</li>
          <li>As perguntas serão randômicas</li>
          <li>O resultado aparecerá na tela</li>
        </ul>
         <button onClick={()=> dispatch({type:"CHANGE_STATE"})}>INICIAR</button>

      </div>       
        
    </div>
  )
}

export default Welcome