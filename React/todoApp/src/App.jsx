import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('')
  const handleChange = (e) => {
    setNewTask(e.target.value) 
  }

  const addToList = () => {
    setTodoList([...todoList, newTask]) 
  }

  const handleDelete = (deleteTask) => { 
    const newList = todoList.filter((task, index) => index !== deleteTask)   
    setTodoList(newList)
  }

  return (
    <>
      <input onChange={handleChange} />             
      <button onClick={addToList}>addTask</button>    
      <ul>
        {todoList.map((task, index) => {       
          return <>
            <li key={index} > 
              {task}
              <span onClick={() => handleDelete(index)}> X </span>
            </li>
          </>
        })}
      </ul>

    </>
  );
}

export default App;