import './App.css';
import React, { useState } from 'react';
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"

const App = () => {
    const [todos, setTodos] = useState('');
    const [todo, setTodo] = useState('');

    const addTodo = () => {
        if (todo !== ""){
            setTodos([...todos, todo]);
            setTodo("");
        }
    }

    const deleteTodo = (text) =>{
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos);
    }
    
    return(
        <div className='page'>
        <div className='App' >
            <h1>Список дел</h1>
            <Todoinput todo = {todo} setTodo={setTodo} addTodo = {addTodo}/>
            <Todolist list = {todos} remove = {deleteTodo}/>
        </div>  
       </div>
     
    )
  
}

export default App;
