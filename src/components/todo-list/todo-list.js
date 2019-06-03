import React from 'react';
import TodolistItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ items }) => {
  const todos = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodolistItem { ...itemProps } />
      </li>
    );
  });
  return (
    <ul className="list-group todo-list">
      {todos}
    </ul>
  );
};

export default TodoList;
