import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

const App = () => {
  const todoData = [
    { label: 'Drink tea', important: true, id: 1 },
    { label: 'Learn React', important: false, id: 2 },
    { label: 'Create Awesome App', important: false, id: 3 },
    { label: 'Lunch Time with friends', important: true, id: 4 }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList items={ todoData }/>
    </div>
  );
};

export default App;
