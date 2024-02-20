import React, { useState, useEffect} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES)
  const [categorySelector, setCategorySelector] = useState('All')

 

  const deleteTask = (e) => {
    const taskText = e.target.parentElement.querySelector('.text').innerHTML
    const updatedTasks = tasks.filter(task => task.text !== taskText)
    setTasks(updatedTasks)
    
  }

  const filterTasks = (e) => {

    const newSelector = e.target.innerText

    setCategorySelector(newSelector)

  }

  const onTaskFormSubmit = (e, obj) => {
    e.preventDefault();

    setTasks([...tasks,obj])

    

  }
  
  const filteredTasks = tasks.filter((task) =>  categorySelector === 'All' || task.category === categorySelector)







  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} filterTasks={filterTasks} categorySelector={categorySelector} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />

      <TaskList tasks={filteredTasks} deleteTask={deleteTask}/>
     
    </div>
  );
}

export default App;
