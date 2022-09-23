//react 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//componentes
import Login from './pages/Login';
import Quiz from './pages/Quiz';

//bibliotecas
import Axios from 'axios';


//estáticos
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/:quiz' element={<Quiz/>}/>            
        </Routes>
      </Router>
    </div>
  )
}

export default App
