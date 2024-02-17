import React from "react";
import Task from './Task.js'


function TaskList({tasks,deleteTask}) {

  const mappedTasks = tasks.map((task) => <Task key={task.text} task={task} deleteTask={deleteTask} />)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {mappedTasks}
    </div>
  );
}

export default TaskList;
