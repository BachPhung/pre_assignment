import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/NavBar/NavBar'
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
function App() {
  
  return (  
    <div className="App"> 
      <Router>
        <Navbar/>
      <Switch>
          <Route path='/' exact component={HomePage} ></Route>
          <Route path='/search' component={SearchPage} ></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;