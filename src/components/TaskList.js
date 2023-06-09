import React from "react";
import Task from "./Task";

function TaskList({ tasks, onHandleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            key={task.text}
            text={task.text}
            category={task.category}
            onHandleDelete={onHandleDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
