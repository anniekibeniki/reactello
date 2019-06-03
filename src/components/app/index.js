import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './index.css';

const App = () => {
  const todoData = [
    { label: 'Drink tea', important: true, id: 1, done: false },
    { label: 'Learn React', important: false, id: 2, done: false },
    { label: 'Create Awesome App', important: false, id: 3, done: false },
    { label: 'Lunch Time with friends', important: true, id: 4, done: false }
  ];

  const done = todoData.filter(el => el.done).length;
  const toDo = todoData.filter(el => !el.done).length;

  return (
    <div className="todo-app">
      <AppHeader title="My TODO List" toDo={toDo} done={done}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter activeFilter="all"/>
      </div>
      <TodoList items={ todoData }/>
    </div>
  );
};

export default App;
