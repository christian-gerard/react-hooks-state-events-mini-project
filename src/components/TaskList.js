import React from "react";
import Task from './Task.js'
import {v4 as uuidv4} from 'uuid'



function TaskList({tasks,deleteTask}) {



  const mappedTasks = tasks.map((task) => <Task key={uuidv4()} text={task.text} category={task.category} deleteTask={deleteTask} />)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {mappedTasks}
    </div>
  );
}

export default TaskList;
