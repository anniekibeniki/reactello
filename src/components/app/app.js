import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './index.css';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink tea', important: true, id: 1, done: false },
      { label: 'Learn React', important: false, id: 2, done: false },
      { label: 'Create Awesome App', important: false, id: 3, done: false },
      { label: 'Lunch with friends', important: true, id: 4, done: false }
    ],
  };

  deleteTodo = (id) => {
    const foundInd = this.state.todoData.findIndex(el => el.id === id);
    if (foundInd > -1) {
      this.setState((state) => {
        const newArr = [...state.todoData];
        newArr.splice(foundInd, 1);
        return { todoData: newArr };
      });
    }
  }
  render() {
    const done = this.state.todoData.filter(el => el.done).length;
    const toDo = this.state.todoData.filter(el => !el.done).length;
    return (
      <div className="todo-app">
        <AppHeader title="My TODO List" toDo={toDo} done={done}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter activeFilter="all"/>
        </div>
        <TodoList items={ this.state.todoData } onDeleted={ this.deleteTodo }/>
      </div>
    );
  }
}
