import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const options = categories.filter((category) => category !== "All");
  const [text, setText] = useState("");
  const [category, setFormCategory] = useState("Code");

  function handleFormSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setFormCategory("Code");
  }
  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="text"
          value={text}
        />
      </label>
      <label>
        Category
        <select
          onChange={(e) => setFormCategory(e.target.value)}
          name="category"
          value={category}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
