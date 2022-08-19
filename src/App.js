import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Router from './Router/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
