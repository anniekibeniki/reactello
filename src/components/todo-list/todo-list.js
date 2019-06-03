import React from 'react';
import TodolistItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ items, onDeleted, onToggleImportant, onToggleDone }) => {
  const todos = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodolistItem { ...itemProps }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
          onDeleted={() => onDeleted(id)} />
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
