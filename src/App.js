import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </BrowserRouter>
  );
}

export default App;
