import React, { useState, useEffect} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES)
  const [categorySelector, setCategorySelector] = useState('')

  const deleteTask = (e) => {
    const taskText = e.target.parentElement.querySelector('.text').innerHTML
    const updatedTasks = tasks.filter(task => task.text !== taskText)
    setTasks(updatedTasks)
    
  }

  const filterTasks = (e) => {
    const newSelector = e.target.innerText
    setCategorySelector(newSelector)
  
      if(categorySelector !== 'All') {
        const filteredTasks = TASKS.filter((task) => task.category === categorySelector)
        setTasks(filteredTasks)
      } else {
        setTasks(TASKS)

      }

      

  }



  useEffect(() => {
    // This effect runs whenever categorySelector changes
    console.log('Updated categorySelector:', categorySelector);
    filterTasks()
  }, [categorySelector]);




  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} filterTasks={filterTasks} categorySelector={categorySelector} />
      <NewTaskForm />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
