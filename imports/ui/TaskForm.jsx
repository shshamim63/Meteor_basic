import React, { useState } from 'react';
import { TasksCollection } from '../api/TasksCollection';

export const TaskForm = () => {
  const [text, setText] = useState('');
  
  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log(text);
    e.preventDefault();
    if(!text) return;
    TasksCollection.insert({
      text: text.trim(),
      createdAt: new Date()
    })
  }

  return(
    <form className="task-form" onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Type to add new tasks"
        onChange={ handleChange }
      />
 
      <button type="submit">Add Task</button>
    </form>
  );
}