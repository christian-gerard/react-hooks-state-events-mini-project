import React from "react";

function CategoryFilter({categories,filterTasks,categorySelector}) {

  

  const renderedButtons = categories.map((category) => {
    return <button key={category} onClick={filterTasks} className={categorySelector === category ? 'selected' : ''}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderedButtons}
    </div>
  );
}

export default CategoryFilter;
