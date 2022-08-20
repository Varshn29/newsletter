import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Counter from './Components/Counter/Counter';

function App() {


  return (
    <BrowserRouter>
      <Counter />
    </BrowserRouter>
  );
}

export default App;
