import React, { Component } from 'react';
import TodoListPage from 'pages/todos';
import './index.css';


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoListPage />
      </div>
    );
  }
}
