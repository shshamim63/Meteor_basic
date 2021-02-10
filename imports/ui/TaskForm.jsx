import React, { useState } from 'react';

export const TaskForm = () => {
  const [text, setText] = useState('');
  
  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    Meteor.call('tasks.insert', text);

    setText('');
  };

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