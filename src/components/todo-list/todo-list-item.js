import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodolistItem extends Component {

  onDeleteItem = () => {
    const { onDeleted } = this.props;
    onDeleted();
  }

  render() {
    const { label, onToggleDone, onToggleImportant, done, important } = this.props;

    let classes = ['todo-list-item', 'd-inline-flex'];
    if (important) {
      classes.push('important');
    }
    if (done) {
      classes.push('done');
    }
    return (
      <span className={ classes.join(' ') }>
            <span
              className="todo-list-item-label"
              onClick={onToggleDone}
            >
              { label }
            </span>
            <button type="button"
              onClick={onToggleImportant}
              className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation" />
            </button>
            <button  type="button"
               onClick={this.onDeleteItem}
              className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash" />
            </button>
      </span>
    );
  }
}

