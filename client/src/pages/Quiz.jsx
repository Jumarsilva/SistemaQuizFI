import { useContext, useEffect } from 'react';


//componetes
import Welcome from '../components/Welcome';
import Question from '../components/Question';
import { QuizContext } from '../context/Quiz';
import GameOver from '../components/GameOver';

//estilo
import './Quiz.css'


const Quiz = () => {
    
    const [quizState, dispatch] = useContext(QuizContext);
 
  useEffect(()=> {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className='container-quiz'>
     
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}

    </div>
  )
}

export default Quiz