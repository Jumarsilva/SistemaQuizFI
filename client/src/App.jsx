import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react';

import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Sobre from './pages/Sobre.jsx';
import Analytics from './pages/Analytics.jsx';
import Produtos from './pages/Produtos.jsx';
import ProdutosLista from './pages/ProdutosLista.jsx';
import Quiz from './pages/Quiz.jsx';

import Sidebar from './components/Sidebar'
import './App.css';

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Sidebar>
          <Switch>
            <Route exact path="/" component={Quiz} /> 
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/sobre" component={Sobre}/>
            <Route path="/analytics" component={Analytics}/>
            <Route path="/produtos" component={Produtos}/>
            <Route path="/produtoslista" component={ProdutosLista}/>    
          </Switch>
        </Sidebar>
      </Router>
    </div>
  )
}

export default App
