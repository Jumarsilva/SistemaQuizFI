//react 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//componentes

import Quiz from './pages/Quiz';

//bibliotecas



//estáticos
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>          
          <Route path='/' element={<Quiz/>}/>            
        </Routes>
      </Router>
    </div>
  )
}

export default App
