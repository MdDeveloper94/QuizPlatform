import React from 'react';
import './App.css';
import Quiz from './quiz/Quiz';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import QuizItem from './quiz/QuizItem';

function App() {
  return (
    <div>
      Hello
    <Router>

      <Switch>
  <Route   path="/nav"  component={Navbar} />
  <Route   path="/item"  component={QuizItem} />
  <Route   component={App} />



  </Switch>
  </Router>
  </div>
  );
}

export default App;
