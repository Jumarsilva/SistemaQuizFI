import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './pages/Login.jsx';
import Dashboard from './pages/dashboard.jsx';
import Sobre from './pages/Sobre.jsx';
import Comentarios from './pages/Comentarios.jsx';
import Produtos from './pages/Produtos.jsx';
import ProdutosLista from './pages/ProdutosLista.jsx';
import Quiz from './pages/Quiz.jsx';

import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Sidebar>
          <Switch>        
            <Route path='/' exact component={<Login/>}/>
            <Route path='/dashboard' component={<Dashboard/>}/>
            <Route path='/sobre' component={<Sobre/>}/>
            <Route path='/comentarios' component={<Comentarios/>}/>
            <Route path='/produtos' component={<Produtos/>}/>
            <Route path='/produtoslista' component={<ProdutosLista/>}/>
            <Route path='/quiz' component={<Quiz/>}/>
          </Switch>
        </Sidebar>
      </Router>
    </div>
  )
}

export default App
