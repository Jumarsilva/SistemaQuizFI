//react 
import { useContext, useEffect } from 'react';

//componetes
import Welcome from './components/welcome';
import Question from './components/Question';
import { QuizContext } from './context/Quiz';
import GameOver from './components/GameOver';

//estáticos
import './App.css';


function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=> {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])


  return (
    <div className="App">
      <h1>Quiz da FI Group</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
      
    </div>
  )
}

export default App
