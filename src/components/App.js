import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedButton, setSelectedButton] = useState("All");
  const shownTasks = tasks.filter(
    (task) => selectedButton === "All" || task.category === selectedButton
  );

  function handleDelete(text) {
    setTasks(tasks.filter((task) => task.text !== text));
  }

  // using state to show tasks = buggy, after filter we cannot click another button and show other tasks as a reference to the original no longer exists
  //   if (text !== "All") {
  //     setTasks(tasks.filter((task) => task.category === text));
  //   } else {
  //     setTasks(tasks);
  //   }
  // }

  function handleSelect(event) {
    const text = event.target.textContent;
    setSelectedButton(text);
  }

  function handleAddTask(addedTask) {
    setTasks([...tasks, addedTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedButton={selectedButton}
        setCategories={setCategories}
        onHandleSelect={handleSelect}
        categories={categories}
      />
      <NewTaskForm onTaskFormSubmit={handleAddTask} categories={CATEGORIES} />
      <TaskList tasks={shownTasks} onHandleDelete={handleDelete} />
    </div>
  );
}

export default App;
