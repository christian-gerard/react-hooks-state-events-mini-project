import React, {useState} from "react";


function NewTaskForm({categories,onTaskFormSubmit}) {

  const [text, setNewText] = useState('')
  const [category, setNewCategory] = useState('Code')

  const formObj = {

    category,
    text
  }



  const catOptions = categories.filter((cat) => cat !== 'All').map((x) => <option key={x}>{x}</option>)



  return (
    <form className="new-task-form" onSubmit={(e,obj) => onTaskFormSubmit(e,formObj)}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setNewText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setNewCategory(e.target.value)}>
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
