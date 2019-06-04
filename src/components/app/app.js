import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';
import './index.css';

export default class App extends Component {
  maxId = 1;
  state = {
    todoData: [
      this.createTodoItem('Drink tea'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Create Awesome App'),
      this.createTodoItem('Lunch with friends')
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
  createTodoItem(label) {
    this.maxId += 1;
    return  { label, important: false , id: this.maxId, done: false };
  }
  addTodoItem = (label) => {
    this.setState((state) => {
      return { todoData: [...state.todoData, this.createTodoItem(label)] };
    });
  }
  toggleProperty(arr, propName, id) {
    return arr.reduce((acc, cur) => {
      if (cur.id === id) {
        cur[propName] = !cur[propName];
      }
      acc.push(cur);
      return acc;
    }, []);
  }
  onToggleImportant = (id) => {
    this.setState((state) => {
      return { todoData: this.toggleProperty(state.todoData, 'important', id) };
    });
  }
  onToggleDone = (id) => {
    this.setState((state) => {
      return { todoData: this.toggleProperty(state.todoData, 'done', id) };
    });
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
        <TodoList items={ this.state.todoData }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
          onDeleted={ this.deleteTodo }/>
        <AddItemForm  onAdd={ this.addTodoItem }/>
      </div>
    );
  }
}
