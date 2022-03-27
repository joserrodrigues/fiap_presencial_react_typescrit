import './App.css';
import React, { useState } from 'react';
import NewToDo from './Components/NewToDo';
import ToDos from './Components/ToDos';
import ToDo from './Models/todo';
import ToDosContextProvider from './store/ToDoContext';

function App() {


  return (
    <ToDosContextProvider>
      <NewToDo />
      <ToDos />
    </ToDosContextProvider>    
  );
}

export default App;
