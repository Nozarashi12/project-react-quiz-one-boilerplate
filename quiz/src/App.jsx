import React from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent'
import ResultComponent from './Components/ResultComponent';
import QuizComponent from './Components/QuizComponent';

function App() {
  return (
    <div className="App">
      <HomeComponent/>
       <QuizComponent/> 
      <ResultComponent/>
    </div>
  );
}

export default App;