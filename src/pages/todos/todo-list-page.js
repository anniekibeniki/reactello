import React, { Component } from 'react';
import AppHeader from 'components/app-header';
import SearchPanel from 'components/search-panel';
import TodoList from 'components/todo-list';
import ItemStatusFilter from 'components/item-status-filter';
import AddItemForm from 'components/add-item-form';
import './todo-list-page.css';
import { ApiService } from 'services';

export default class TodoListPage extends Component {
  maxId = 1;
  state = {
    todoData: [],
    searchTerm: '',
    filterParam: 'all',
  };

  constructor() {
    super();
    ApiService.instance().getAllTodos().then((todoData) => {
      this.setState({ todoData });
    }).catch(() => {});
  }

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
  createTodoItem(id, label, done = false, important = false) {
    return  { label, important, id, done };
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
  onSearchTodo = (txt) => {
    this.setState({ searchTerm: txt });
  }
  onChangeActiveFilter = (type) => {
    this.setState({ filterParam: type });
  }
  search(list, term) {
    const newList = term ? this.state.todoData.reduce((acc, cur) => {
      if (cur.label.toLowerCase().includes(term.toLowerCase())) {
        acc.push(cur);
      }
      return acc;
    }, []) : list;
    return newList;
  }
  filter(list, param) {
    if (param === 'all') {
      return list;
    }
    if (param === 'active') {
      return list.filter(el => !el.done);
    }
    return list.filter(el => el[param]);
  }

  render() {
    const { todoData, searchTerm, filterParam } = this.state;
    const done = todoData.filter(el => el.done).length;
    const toDo = todoData.filter(el => !el.done).length;
    const visibleItems = this.filter(this.search(todoData, searchTerm), filterParam);
    return (
      <div className="todo-list-page">
        <AppHeader title="My TODO List" toDo={toDo} done={done}/>
        <div className="top-panel d-flex">
          <SearchPanel onSearchTodo= {this.onSearchTodo} />
          <ItemStatusFilter activeFilter={filterParam} onChange={this.onChangeActiveFilter}/>
        </div>
        <TodoList items={ visibleItems }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
          onDeleted={ this.deleteTodo }/>
        <AddItemForm  onAdd={ this.addTodoItem }/>
      </div>
    );
  }
}
