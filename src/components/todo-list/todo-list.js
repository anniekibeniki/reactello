import React from 'react';
import TodolistItem from './todo-list-item';

const TodoList = ({ items }) => {
  const todos = items.map(item => (
    <li key={item.id}>
      <TodolistItem { ...item} />
    </li>
  ));
  return (
    <ul>
      {todos}
    </ul>
  );
};

export default TodoList;
