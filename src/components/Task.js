import React from "react";

function Task({ text, category, onHandleDelete }) {
  function buttonClick() {
    onHandleDelete(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={buttonClick}>
        X
      </button>
    </div>
  );
}

export default Task;
