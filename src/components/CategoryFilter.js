import React from "react";

function CategoryFilter({ categories, onHandleSelect, selectedButton }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button
            className={selectedButton === category ? "selected" : ""}
            onClick={(e) => onHandleSelect(e)}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
