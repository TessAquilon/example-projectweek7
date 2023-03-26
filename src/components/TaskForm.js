/* eslint-disable linebreak-style */
import React from 'react';

export const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h2>Welcome to Todo App! Type new task below.</h2>
      <textarea value={newTodo} onChange={onNewTodoChange} />
      <button type="submit">Submit</button>
    </form>
  )
}